import requests
import re
import time
import json


class MailpitHelper:
    def __init__(self, mailpit_base_url="http://dev.kuja.org:8025", username="admin", password="BJQe5RrscDsf4a"):
        self.mailpit_base_url = mailpit_base_url
        self.auth = (username, password)

    def get_otp_for(self, email, wait_seconds=60):
        """
        Poll Mailpit for an OTP sent to the given email.
        Returns the OTP as a string if found, else raises Exception.
        """
        url = f"{self.mailpit_base_url}/api/v1/messages"
        start_time = time.time()

        while time.time() - start_time < wait_seconds:
            try:
                response = requests.get(url, auth=self.auth)
                response.raise_for_status()
                payload = response.json()

                # Mailpit responses usually have "messages" field
                messages = payload.get("messages", payload)
                if not isinstance(messages, list):
                    print(f"⚠️ Unexpected Mailpit response: {payload}")
                    time.sleep(2)
                    continue

                for message in messages:
                    if not isinstance(message, dict):
                        print(f"⚠️ Skipping non-dict message: {message}")
                        continue

                    recipients = []

                    # Extract recipients from "To" field
                    if "To" in message and isinstance(message["To"], list):
                        recipients.extend([to.get("Address") for to in message["To"] if isinstance(to, dict)])

                    # Extract from headers if present
                    headers = message.get("Headers", {})
                    if isinstance(headers, dict) and "To" in headers:
                        if isinstance(headers["To"], list):
                            recipients.extend(headers["To"])
                        elif isinstance(headers["To"], str):
                            recipients.append(headers["To"])

                    # Debug recipients
                    print(f"📧 Checking recipients: {recipients}")

                    # Check if target email is in recipients
                    if email in recipients:
                        print(f"📨 Found email for {email}: {message.get('Subject')}")

                        # Extract possible body fields
                        body = (
                                message.get("Text")
                                or message.get("HTML")
                                or message.get("Raw")
                                or json.dumps(message)
                        )

                        print(f"📜 Message body preview: {body[:200]}")

                        # Find OTP (6 digits)
                        otp_match = re.search(r"\b\d{6}\b", body)
                        if otp_match:
                            otp = otp_match.group(0)
                            print(f"✅ OTP found for {email}: {otp}")
                            self.delete_messages()
                            return otp
                        else:
                            print("⚠️ No OTP pattern found in message body.")

                time.sleep(2)  # retry
            except requests.exceptions.RequestException as e:
                print(f"⚠️ Failed to connect to Mailpit: {e}. Retrying...")
                time.sleep(2)

        raise Exception(f"❌ No OTP found for {email} within {wait_seconds} seconds.")

    def delete_messages(self):
        """Deletes all messages in Mailpit to ensure a clean state."""
        try:
            requests.delete(f"{self.mailpit_base_url}/api/v1/messages", auth=self.auth)
            print("🗑️ Old messages deleted from Mailpit.")
        except requests.exceptions.RequestException as e:
            print(f"⚠️ Failed to delete messages from Mailpit: {e}")
