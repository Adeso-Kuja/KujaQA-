from selenium.webdriver.common.by import By
from .base_page import BasePage

class OrganizationProfilePage(BasePage):
    ORG_NAME_FIELD = (By.ID, "orgName")
    SAVE_BUTTON = (By.XPATH, "//button[contains(text(), 'Save')]")
    PROFILE_SUCCESS_MESSAGE = (By.XPATH, "//div[contains(text(), 'Profile updated successfully')]")

    def edit_org_name(self, new_name):
        self.enter_text(self.ORG_NAME_FIELD, new_name)

    def save_profile(self):
        self.click_element(self.SAVE_BUTTON)
        self.find_element(self.PROFILE_SUCCESS_MESSAGE)
