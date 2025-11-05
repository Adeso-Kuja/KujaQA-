from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait


class BasePage:
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(self.driver, 10)

    def find_element(self, by_locator):
        return self.wait.until(EC.visibility_of_element_located(by_locator))

    def click_element(self, by_locator):
        element = self.wait.until(EC.element_to_be_clickable(by_locator))
        try:
            element.click()
        except Exception:
            # fallback if normal click fails
            self.driver.execute_script("arguments[0].click();", element)

    def get_text(self, by_locator):
        element = self.find_element(by_locator)
        return element.text.strip()

    def get_current_url(self):
        return self.driver.current_url


    def enter_text(self, by_locator, text):
        element = self.find_element(by_locator)
        element.clear()
        element.send_keys(text)

    def navigate_from_dashboard(self, option: str):
        """
        Reusable navigation to Grants or Forums from dashboard dropdown.
        Ensures language is set to English first.
        """

        # Step 1: Open language dropdown
        lang_dropdown = (By.XPATH, "//button[@class='border-0 dropdown-toggle nav-link']")
        try:
            self.click_element(lang_dropdown)

            # Step 2: Select English (US) if present
            english_option = (
                By.XPATH,
                "//div[@class='dropdown-menu dropdown-menu-end show']//span[contains(text(),'English (US)')]"
            )
            self.click_element(english_option)
        except Exception:
            # If already in English or dropdown not found, skip
            pass

        # Step 3: Open the main dashboard dropdown
        dashboard_dropdown = (By.XPATH, "//a[contains(@class,'nav-link dropdown-toggle o_mega_menu_toggle')]")
        dropdown_el = self.wait.until(EC.element_to_be_clickable(dashboard_dropdown))
        try:
            dropdown_el.click()
        except Exception:
            self.driver.execute_script("arguments[0].click();", dropdown_el)

        # Step 4: Choose Grants or Forums
        if option.lower() == "grants":
            grants_option = (
                By.XPATH,
                "//p[contains(text(),'Grants on Kuja connect individuals and organizatio')]"
            )
            self.click_element(grants_option)
        elif option.lower() == "forums":
            forums_option = (
                By.XPATH,
                "//li[2]//div[1]//div[1]//a[2]//div[2]"
            )
            self.click_element(forums_option)
        else:
            raise ValueError(f"Unknown dashboard option: {option}")