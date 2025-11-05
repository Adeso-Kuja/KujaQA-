# pages/forums_page.py
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from .base_page import BasePage


class ForumsPage(BasePage):
    # ======== Locators ========
    ALL_FORUMS = (By.XPATH, "//a[normalize-space()='All Forums']")
    MY_FORUMS = (By.XPATH, "//a[normalize-space()='My Forums']")
    SELECTED_FORUMS_TAB = (By.XPATH, "//li[@class='nav-item kc-link-selected']//a[@class='kc-link kc-hoverable']")
    CREATE_FORUM_BTN = (By.XPATH, "//button[@class='my-4 btn btn-danger rounded-2 kc-create-comm']")

    # Create Forum form elements
    FORUM_TITLE_LABEL = (By.XPATH, "//label[@for='name']")
    DESCRIPTION_LABEL = (By.XPATH, "//label[@for='description']")
    PRIVACY_LABEL = (By.XPATH, "//label[normalize-space()='Privacy']")
    FOCUS_AREAS_LABEL = (By.XPATH, "//label[@for='tags']")

    # ======== Actions ========

    def verify_forums_dashboard_elements(self):
        """Verify Forums dashboard has all expected key elements visible"""
        wait = WebDriverWait(self.driver, 10)
        wait.until(EC.visibility_of_element_located(self.ALL_FORUMS))
        wait.until(EC.visibility_of_element_located(self.MY_FORUMS))
        wait.until(EC.visibility_of_element_located(self.SELECTED_FORUMS_TAB))
        wait.until(EC.visibility_of_element_located(self.CREATE_FORUM_BTN))

        assert self.is_element_visible(self.ALL_FORUMS), "❌ 'All Forums' link not visible"
        assert self.is_element_visible(self.MY_FORUMS), "❌ 'My Forums' link not visible"
        assert self.is_element_visible(self.SELECTED_FORUMS_TAB), "❌ Selected forum tab not visible"
        assert self.is_element_visible(self.CREATE_FORUM_BTN), "❌ 'Create Forum' button not visible"
        print("✅ All Forums dashboard elements are visible.")

    def click_create_forum(self):
        """Click 'Create Forum' button to open the create form"""
        self.click_element(self.CREATE_FORUM_BTN)

    def verify_create_forum_form_fields(self):
        """Verify the Create Forum form fields are visible"""
        wait = WebDriverWait(self.driver, 10)
        elements = [
            self.FORUM_TITLE_LABEL,
            self.DESCRIPTION_LABEL,
            self.PRIVACY_LABEL,
            self.FOCUS_AREAS_LABEL,
        ]
        for locator in elements:
            wait.until(EC.visibility_of_element_located(locator))
            assert self.is_element_visible(locator), f"❌ Expected element not visible: {locator}"

        print("✅ All Create Forum form fields are visible.")
