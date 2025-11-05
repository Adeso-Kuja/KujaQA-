# features/steps/forums_steps.py
from behave import given, when, then

@given("I am logged into Kuja and on the dashboard")
def step_impl(context):
    context.login_page.open_home()
    context.login_page.go_to_signin()
    context.login_page.click_login_as_email()
    context.login_page.submit_email("marial.lugare@kuja.org")
    otp = context.mailpit.get_otp_for("marial.lugare@kuja.org", wait_seconds=30)
    context.login_page.enter_otp(otp)
    print("✅ Logged into Kuja and on the dashboard")

@when('I navigate to "forums" from the dropdown')
def step_impl(context):
    context.login_page.navigate_from_dashboard("forums")
    print("✅ Navigated to Forums from dashboard")

@then("I should see all expected forums dashboard elements")
def step_impl(context):
    context.forums_page.verify_forums_dashboard_elements()

@when('I click on the "Create Forum" button')
def step_impl(context):
    context.forums_page.click_create_forum()
    print("✅ Clicked on Create Forum button")

@then("I should see all create forum form fields")
def step_impl(context):
    context.forums_page.verify_create_forum_form_fields()
