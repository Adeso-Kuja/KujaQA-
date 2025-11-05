from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

class DriverManager:
    def __init__(self, config_file=None):
        self.config_file = config_file

    def get_driver(self):
        # Using webdriver_manager to handle driver installation
        service = Service(ChromeDriverManager().install())
        options = Options()
        # Add any desired options here, e.g., headless mode
        # options.add_argument("--headless")
        driver = webdriver.Chrome(service=service, options=options)
        driver.maximize_window()
        return driver

    def quit(self, driver):
        driver.quit()