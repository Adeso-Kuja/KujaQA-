import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

/**
 * Fetches the latest 6-digit OTP from Mailpit API.
 */
export async function getLatestOTP() {
  const host = process.env.MAILPIT_HOST || 'dev.kuja.org:8025';
  const username = process.env.MAILPIT_USERNAME;
  const password = process.env.MAILPIT_PASSWORD;

  if (!username || !password) {
    throw new Error("Missing MAILPIT_USERNAME or MAILPIT_PASSWORD in .env");
  }

  // Create Basic Auth header
  const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;
  
  const maxAttempts = 10;
  const delayBetweenAttempts = 3000; // 3 seconds

  console.log(`Searching Mailpit (${host}) for OTP...`);

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      // Mailpit API endpoint for messages
      const response = await fetch(`http://${host}/api/v1/messages?limit=5`, {
        headers: { 'Authorization': authHeader }
      });

      if (!response.ok) {
        throw new Error(`Mailpit responded with ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      const messages = data.messages || [];

      // Find the most recent message from notifications@kuja.org
      const latestMsg = messages.find(m => m.From.Address.includes('notifications@kuja.org'));

      if (latestMsg) {
        // Fetch the full content of this specific message to get the OTP
        const detailsResponse = await fetch(`http://${host}/api/v1/message/${latestMsg.ID}`, {
          headers: { 'Authorization': authHeader }
        });
        const details = await detailsResponse.json();
        
        // Search in Subject, Snippet, or Body
        const contentToSearch = details.Snippet + details.Subject + details.Text;
        const otpMatch = contentToSearch.match(/\d{6}/);

        if (otpMatch) {
          console.log(`OTP found: ${otpMatch[0]} (Attempt ${attempt})`);
          return otpMatch[0];
        }
      }
    } catch (error) {
      console.error(`Mailpit attempt ${attempt} failed:`, error.message);
    }

    if (attempt < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, delayBetweenAttempts));
    }
  }

  throw new Error("Timeout: OTP not found in Mailpit after 10 attempts.");
}