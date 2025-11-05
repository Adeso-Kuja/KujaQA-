from behave import given, when, then
import time
from utils.mailpit_helper import MailpitHelper

@given("I am on the Kuja home page")
def step_open_home(context):
    context.login_page.open_home()
    context.login_page.change_language_to_english()  # 👈 New step added


@when('I navigate to the Sign In page and choose "Login by email"')
def step_login_by_email(context):
    context.login_page.click_login_button()
    context.login_page.click_login_as_email()


@when('I submit email "{email}"')
def step_submit_email(context, email):
    context.login_page.submit_email(email)
    context.submitted_email = email


@then("I fetch the OTP from Mailpit and verify I am redirected to my profile page")
def step_verify_login(context):
    otp = context.mailpit.get_otp_for(context.submitted_email, wait_seconds=60)
    context.login_page.enter_otp(otp)
    time.sleep(2)
    url = context.login_page.get_current_url()
    assert "/es/my" in url or "/my" in url, f"Not on profile page, current url: {url}"
