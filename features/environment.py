import os
import logging
import allure
from allure_commons.types import AttachmentType
from behave.fixture import fixture, use_fixture

from utils.driver_manager import DriverManager
from pages.login_page import LoginPage
from pages.organization_profile_page import OrganizationProfilePage
from pages.grants_page import GrantsPage
from pages.forums_page import ForumsPage
from utils.mailpit_helper import MailpitHelper
from utils.config_loader import ConfigLoader


# --------------------------
# Configure logging
# --------------------------
LOGS_DIR = "logs"
os.makedirs(LOGS_DIR, exist_ok=True)
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(os.path.join(LOGS_DIR, "test_run.log")),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)


@fixture
def browser_driver(context):
    """
    Sets up and tears down the Selenium WebDriver.
    """
    logger.info("🚀 Starting browser driver...")
    context.driver_manager = DriverManager()
    context.driver = context.driver_manager.get_driver()
    yield context.driver
    logger.info("🛑 Quitting browser driver...")
    context.driver_manager.quit(context.driver)


def before_all(context):
    """
    Global setup for the entire test run.
    Loads config and initializes Mailpit helper.
    """
    logger.info("🔧 Loading global configuration...")
    context.cfg = ConfigLoader("config.properties")
    context.base_url = context.cfg.get("settings", "BASE_URL", "https://dev.kuja.org/")
    context.mailpit = MailpitHelper(mailpit_base_url="http://dev.kuja.org:8025")

    # Ensure Allure results folder exists
    os.makedirs("reports/allure-results", exist_ok=True)
    logger.info("📂 Allure results directory ensured.")


def before_feature(context, feature):
    """
    Setup before each feature.
    Initializes driver and page objects for test steps.
    """
    logger.info(f"▶️ Starting feature: {feature.name}")
    use_fixture(browser_driver, context)

    # Page objects
    context.login_page = LoginPage(context.driver, base_url=context.base_url)
    context.org_page = OrganizationProfilePage(context.driver)
    context.grants_page = GrantsPage(context.driver)
    context.forums_page = ForumsPage(context.driver)


def after_step(context, step):
    """
    Hook after each step.
    - Capture screenshot in Allure if failed
    - Log step result to stdout
    """
    if step.status == "failed" and hasattr(context, "driver"):
        try:
            screenshot = context.driver.get_screenshot_as_png()
            allure.attach(
                screenshot,
                name=f"{step.name}_screenshot",
                attachment_type=AttachmentType.PNG
            )
            logger.error(f"❌ Step failed: {step.name}. Screenshot attached to Allure.")
        except Exception as e:
            logger.error(f"[ALLURE] Failed to capture screenshot: {e}")

    # Console reporting for each step
    if step.status == "passed":
        print(f"✅ STEP PASSED: {step.name}")
    elif step.status == "failed":
        print(f"❌ STEP FAILED: {step.name}")
    elif step.status == "skipped":
        print(f"⏭️ STEP SKIPPED: {step.name}")


def after_scenario(context, scenario):
    """
    Hook after each scenario to log the result.
    """
    print(f"\n--- Scenario '{scenario.name}' finished with status: {scenario.status} ---\n")
    logger.info(f"Scenario '{scenario.name}' finished with status: {scenario.status}")


def after_feature(context, feature):
    """
    Teardown after each feature.
    """
    logger.info(f"✅ Finished feature: {feature.name}")


def after_all(context):
    """
    Global teardown after all tests finish.
    """
    logger.info("🏁 Test run completed.")
