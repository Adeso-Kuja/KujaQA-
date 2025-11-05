import os
import logging
import allure
import subprocess
import webbrowser
from allure_commons.types import AttachmentType
from behave.fixture import fixture, use_fixture
from allure_commons.reporter import AllureReporter
from allure_commons._allure import plugin_manager
from allure_behave.listener import AllureListener

from utils.driver_manager import DriverManager
from pages.login_page import LoginPage
from pages.organization_profile_page import OrganizationProfilePage
from pages.grants_page import GrantsPage
from pages.forums_page import ForumsPage
from pages.registration_page import RegistrationPage   # ✅ Added
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
    """Sets up and tears down the Selenium WebDriver."""
    logger.info("🚀 Starting browser driver...")
    context.driver_manager = DriverManager()
    context.driver = context.driver_manager.get_driver()
    yield context.driver
    logger.info("🛑 Quitting browser driver...")
    context.driver_manager.quit(context.driver)


def before_all(context):
    """Global setup for the entire test run."""
    logger.info("🔧 Loading global configuration...")
    context.cfg = ConfigLoader("config.properties")
    context.base_url = context.cfg.get("settings", "BASE_URL", "https://dev.kuja.org/")
    context.mailpit = MailpitHelper(mailpit_base_url="http://dev.kuja.org:8025")

    # Allure results setup
    context.allure_results_dir = "reports/allure-results"
    context.allure_report_dir = "reports/allure-report"
    os.makedirs(context.allure_results_dir, exist_ok=True)
    logger.info("📂 Allure results directory ensured.")

    # Register Allure listener
    listener = AllureListener(context.allure_results_dir)
    plugin_manager.register(listener)
    plugin_manager.register(AllureReporter())


def before_feature(context, feature):
    """Setup before each feature."""
    logger.info(f"▶️ Starting feature: {feature.name}")
    use_fixture(browser_driver, context)

    # Page objects initialization ✅
    context.login_page = LoginPage(context.driver, base_url=context.base_url)
    context.registration_page = RegistrationPage(context.driver)   # ✅ Added
    context.org_page = OrganizationProfilePage(context.driver)
    context.grants_page = GrantsPage(context.driver)
    context.forums_page = ForumsPage(context.driver)


def after_step(context, step):
    """Hook after each step — captures screenshots and colors outputs."""
    if hasattr(context, "driver"):
        try:
            screenshot = context.driver.get_screenshot_as_png()
            allure.attach(
                screenshot,
                name=f"{step.name}_screenshot",
                attachment_type=AttachmentType.PNG
            )
        except Exception as e:
            logger.error(f"[ALLURE] Failed to capture screenshot: {e}")

    # Colored output for terminal
    GREEN = "\033[92m"
    RED = "\033[91m"
    YELLOW = "\033[93m"
    RESET = "\033[0m"

    if step.status == "passed":
        print(f"{GREEN}✅ STEP PASSED: {step.name}{RESET}")
    elif step.status == "failed":
        print(f"{RED}❌ STEP FAILED: {step.name}{RESET}")
    elif step.status == "skipped":
        print(f"{YELLOW}⏭️ STEP SKIPPED: {step.name}{RESET}")


def after_scenario(context, scenario):
    """Hook after each scenario."""
    print(f"\n--- Scenario '{scenario.name}' finished with status: {scenario.status} ---\n")
    logger.info(f"Scenario '{scenario.name}' finished with status: {scenario.status}")


def after_feature(context, feature):
    """Teardown after each feature."""
    logger.info(f"✅ Finished feature: {feature.name}")


def after_all(context):
    """Global teardown after all tests finish."""
    logger.info("🏁 Test run completed.")
    logger.info("📊 Generating Allure HTML report...")

    try:
        subprocess.run(
            ["allure", "generate", context.allure_results_dir, "-o", context.allure_report_dir, "--clean"],
            check=True
        )
        report_path = os.path.abspath(context.allure_report_dir)
        logger.info(f"✅ Allure report generated at: {report_path}")

        webbrowser.open(f"file://{report_path}/index.html")
        print(f"\n✨ Allure Report Available at: {report_path}/index.html\n")
    except Exception as e:
        logger.error(f"⚠️ Failed to generate or open Allure report: {e}")
