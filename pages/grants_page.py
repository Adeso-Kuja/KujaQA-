from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from .base_page import BasePage
import time

class GrantsPage(BasePage):
    GRANTS_SECTION = (By.XPATH, "//p[contains(text(),'Grants on Kuja connect individuals and organizatio')]")
    SEARCH_FIELD = (By.XPATH, "//input[@placeholder='Search Grants...']")
    NO_GRANTS_TEXT = (By.XPATH, "//div[@class='col-lg-9 d-none d-lg-block']//div//span[contains(text(),'No grants found')]")
    EXISTING_GRANT_RESULT = (By.XPATH, "//div[@class='col-8 border-end pe-3 ps-3 pt-3']//h5[@class='mt-2'][normalize-space()='The Happel Foundation']")

    def verify_grants_page(self):
        """Verify that the Grants page is loaded by checking for key text."""
        assert "Grants on Kuja connect individuals and organizatio" in self.get_text(self.GRANTS_SECTION), \
            "Grants page text not found."

    def search_for_grant(self, query):
        """Enter text into the Search Grants bar and press Enter."""
        search_box = self.find_element(self.SEARCH_FIELD)
        search_box.clear()
        search_box.send_keys(query)
        search_box.send_keys(Keys.ENTER)
        time.sleep(2)  # Allow time for search results to load (replace with explicit wait if needed)

    def verify_no_grant_found(self):
        """Verify that 'No grants found' message appears."""
        assert "No grants found" in self.get_text(self.NO_GRANTS_TEXT), \
            "Expected 'No grants found' message not displayed."

    def verify_existing_grant_found(self):
        """Verify that the specific existing grant appears."""
        assert "The Happel Foundation" in self.get_text(self.EXISTING_GRANT_RESULT), \
            "Expected grant 'The Happel Foundation' not found in results."
