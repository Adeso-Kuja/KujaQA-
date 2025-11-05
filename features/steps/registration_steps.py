from behave import given, when, then
from utils.mailpit_helper import MailpitHelper
import random
import time

@given("I am on the Kuja homepage")
def step_impl(context):
    context.login_page.open_home()
    print("✅ Opened Kuja homepage")

@given("I change the language to English")
def step_impl(context):
    context.login_page.change_language_to_english()
    print("✅ Language changed to English")

@when("I choose to register as an individual")
def step_impl(context):
    context.registration_page.click_register_as_individual()
    print("✅ Clicked on 'Create your personal account'")

@when("I choose to register as an organization")
def step_impl(context):
    context.registration_page.click_register_as_organization()
    print("✅ Clicked on 'Register as an organization'")

@when("I click on register with email")
def step_impl(context):
    context.registration_page.click_register_with_email()
    print("✅ Clicked on 'Register with your email'")

@when("I enter a new email address and submit")
def step_impl(context):
    unique_email = f"test_user_{random.randint(1000,9999)}@kujatest.org"
    context.registration_page.enter_email(unique_email)
    context.registration_page.click_submit()
    context.test_email = unique_email
    print(f"✅ Entered new email: {unique_email}")

@when("I retrieve the OTP and verify my account")
def step_impl(context):
    mailpit = MailpitHelper()
    otp = mailpit.get_otp_for(context.test_email, wait_seconds=60)
    print(f"✅ Retrieved OTP: {otp}")
    context.registration_page.enter_otp(otp)
    context.registration_page.click_verify_account()
    print("✅ OTP entered and account verified")

@then("I should see individual registration form elements")
def step_impl(context):
    context.registration_page.verify_individual_registration_fields()
    print("✅ Verified individual registration form fields")

@then("I should see organization registration page elements")
def step_impl(context):
    context.registration_page.verify_organization_registration_fields()
    print("✅ Verified organization registration form fields")
