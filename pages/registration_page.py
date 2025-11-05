from selenium.webdriver.common.by import By
from .base_page import BasePage
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class RegistrationPage(BasePage):
    HOME_URL = "https://dev.kuja.org/"

    REGISTER_AS_INDIVIDUAL = (
        By.XPATH, "//div[@class='register-card bg-white d-none d-lg-block']//div[@class='row align-items-stretch']//div[@class='col-md-5 d-flex align-items-center']//div//a"
    )
    REGISTER_AS_ORGANIZATION = (
        By.XPATH, "//div[@class='register-card bg-white d-none d-lg-block']//div[@class='row align-items-stretch']//div[@class='col-md-6 d-flex align-items-center']//div//a"
    )

    REGISTER_WITH_EMAIL = (By.XPATH, "//a[@class='btn oauth-btn btn-email']")
    EMAIL_INPUT = (By.XPATH, "//input[@id='signup-email']")
    SUBMIT_BTN = (By.XPATH, "//button[@type='submit']")
    OTP_FIELDS = [
        (By.ID, "digit-1"), (By.ID, "digit-2"),
        (By.ID, "digit-3"), (By.ID, "digit-4"),
        (By.ID, "digit-5"), (By.ID, "digit-6"),
    ]
    VERIFY_BTN = (By.XPATH, "//button[@id='verify-submit']")

    FIRST_NAME_LABEL = (By.XPATH, "//label[normalize-space()='First Name *']")
    LAST_NAME_LABEL = (By.XPATH, "//label[normalize-space()='Last Name *']")
    EMAIL_LABEL = (By.XPATH, "//label[@for='email']")
    WHATSAPP_LABEL = (By.XPATH, "//div[6]//label[1]")
    COUNTRY_LABEL = (By.XPATH, "//label[@for='country']")

    ORG_NAME_LABEL = (By.XPATH, "//label[normalize-space()='Organization Name *']")
    ORG_EMAIL_LABEL = (By.XPATH, "//label[@for='email']")
    ORG_COUNTRY_LABEL = (By.XPATH, "//label[@for='country']")

    def open_home(self):
        self.driver.get(self.HOME_URL)

    def click_register_as_individual(self):
        print("➡️ Attempting to click 'Register as Individual'...")
        WebDriverWait(self.driver, 10).until(
            EC.visibility_of_element_located(self.REGISTER_AS_INDIVIDUAL)
        )
        self.click_element(self.REGISTER_AS_INDIVIDUAL)

    def click_register_as_organization(self):
        self.click_element(self.REGISTER_AS_ORGANIZATION)

    def click_register_with_email(self):
        self.click_element(self.REGISTER_WITH_EMAIL)

    def enter_email(self, email):
        self.enter_text(self.EMAIL_INPUT, email)

    def click_submit(self):
        self.click_element(self.SUBMIT_BTN)

    def enter_otp(self, otp):
        for i, digit in enumerate(otp):
            self.enter_text(self.OTP_FIELDS[i], digit)

    def click_verify_account(self):
        self.click_element(self.VERIFY_BTN)

    def verify_individual_registration_fields(self):
        assert self.is_visible(self.FIRST_NAME_LABEL), "❌ First Name label not visible"
        assert self.is_visible(self.LAST_NAME_LABEL), "❌ Last Name label not visible"
        assert self.is_visible(self.EMAIL_LABEL), "❌ Email label not visible"
        assert self.is_visible(self.WHATSAPP_LABEL), "❌ WhatsApp number label not visible"
        assert self.is_visible(self.COUNTRY_LABEL), "❌ Country label not visible"
        print("✅ All individual registration form elements are visible")

    def verify_organization_registration_fields(self):
        assert self.is_visible(self.ORG_NAME_LABEL), "❌ Organization Name label not visible"
        assert self.is_visible(self.ORG_EMAIL_LABEL), "❌ Organization Email label not visible"
        assert self.is_visible(self.ORG_COUNTRY_LABEL), "❌ Organization Country label not visible"
        print("✅ All organization registration form elements are visible")
