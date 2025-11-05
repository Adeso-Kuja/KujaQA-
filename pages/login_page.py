from selenium.webdriver.common.by import By
from .base_page import BasePage

class LoginPage(BasePage):
    def __init__(self, driver, base_url="https://dev.kuja.org/"):
        super().__init__(driver)
        self.base_url = base_url
        self.login_url = f"{self.base_url}partners/signin"

    # Locators
    LOGIN_BTN = (By.XPATH, "//ul[@class='navbar-nav align-items-center gap-2 flex-shrink-0 justify-content-end ps-3']//a[@class='btn btn-primary btn-cta'][normalize-space()='Log In']")
    LOGIN_AS_EMAIL_BTN = (By.XPATH, "//a[@class='btn oauth-btn btn-email']")
    EMAIL_FIELD = (By.ID, "signup-email")
    SUBMIT_BUTTON = (By.XPATH, "//button[@type='submit']")
    OTP_FIELDS = [
        (By.ID, "digit-1"), (By.ID, "digit-2"),
        (By.ID, "digit-3"), (By.ID, "digit-4"),
        (By.ID, "digit-5"), (By.ID, "digit-6"),
    ]
    OTP_SUBMIT_BUTTON = (By.XPATH, "//button[@id='verify-submit']")

    # Language change locators
    LANGUAGE_DROPDOWN = (By.XPATH, "//button[@class='border-0 dropdown-toggle nav-link']")
    ENGLISH_OPTION = (By.XPATH, "//div[@class='dropdown-menu dropdown-menu-end show']//span[contains(text(),'English (US)')]")

    # Actions
    def open_home(self):
        """Open the Kuja home page."""
        self.driver.get(self.base_url)

    def change_language_to_english(self):
        """Change the interface language to English (US)."""
        self.click_element(self.LANGUAGE_DROPDOWN)
        self.click_element(self.ENGLISH_OPTION)

    def click_login_button(self):
        """Click the Log In button on the home page."""
        self.click_element(self.LOGIN_BTN)

    def go_to_signin(self):
        """Directly navigate to the signin page (optional)."""
        self.driver.get(self.login_url)

    def click_login_as_email(self):
        """Click the 'Login by Email' button."""
        self.click_element(self.LOGIN_AS_EMAIL_BTN)

    def submit_email(self, email):
        """Enter email and click submit."""
        self.enter_text(self.EMAIL_FIELD, email)
        self.click_element(self.SUBMIT_BUTTON)

    def enter_otp(self, otp):
        """Enter OTP digits one by one and submit."""
        for i, digit in enumerate(otp):
            self.enter_text(self.OTP_FIELDS[i], digit)
        self.click_element(self.OTP_SUBMIT_BUTTON)

    def get_current_url(self):
        """Return the current URL."""
        return self.driver.current_url
