from behave import when, then
import time

@when('I navigate to "grants" from the dropdown')
def step_impl(context):
    context.login_page.navigate_from_dashboard("grants")


@then("I should see the grants page")
def step_impl(context):
    context.grants_page.verify_grants_page()


@then("I search for grants that does not exist")
def step_search_unavailable_grants(context):
    context.grants_page.search_for_grant("qwerty1234")
    time.sleep(1)
    context.grants_page.verify_no_grant_found()


@then("I search for grants that does exists")
def step_search_available_grants(context):
    context.grants_page.search_for_grant("The Happel Foundation")
    time.sleep(1)
    context.grants_page.verify_existing_grant_found()
