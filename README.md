# Kuja Automation Framework (Python + Selenium + Behave)

This is a comprehensive automation framework built with **Python**, **Selenium WebDriver**, and the **Behave (Cucumber)** BDD framework for testing the **Kuja web application**.  
It follows the **Page Object Model (POM)** design pattern for maintainability, integrates with **Mailpit** for OTP handling, and generates detailed test execution reports using **Allure**.

---

## 🛠️ Tools and Technologies

- **Language**: Python 3.9+
- **Automation Library**: Selenium WebDriver
- **Testing Framework**: Behave (Cucumber for Python)
- **Dependencies**:
   - `requests` → For API calls (e.g., fetching OTP from Mailpit)
   - `webdriver-manager` → Automatically manages browser drivers
   - `configparser` → Handles configuration files
- **Reporting**: Allure

---

## 📂 Project Structure

```
KujaAutomationFramework_clean/
├── features/
│   ├── environment.py       # Behave hooks for setup & teardown
│   ├── login.feature        # Gherkin feature file for login tests
│   └── steps/
│       └── login_steps.py   # Step definitions for login.feature
├── pages/
│   ├── base_page.py         # Base class with common page methods
│   ├── login_page.py        # Page object for login page
│   └── organization_profile_page.py # Page object for org profile
├── utils/
│   ├── config_loader.py     # Utility to read configuration
│   ├── driver_manager.py    # Manages Selenium WebDriver
│   └── mailpit_helper.py    # Utility to fetch OTP from Mailpit API
├── test_data/
│   └── users.json           # Sample test data
├── config.properties        # Project config file (base URL, etc.)
├── requirements.txt         # List of Python dependencies
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd KujaAutomationFramework_clean
```

### 2. Set Up a Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Project Settings
Edit `config.properties` at the root:

```properties
[settings]
BASE_URL = https://dev.kuja.org/
MAILPIT_URL = http://dev.kuja.org:8025/
MAILPIT_USER = admin
MAILPIT_PASSWORD = BJQe5RrscDsf4a
```

---

## 🏃 Running Tests

### Run All Features
```bash
behave
```

### Run a Specific Feature
```bash
behave features/login.feature
```

### Run a Specific Scenario (Using Tags)
Add a tag like `@login` in the `.feature` file:
```bash
behave --tags=@login
```

---

## 📈 Generating Reports (Allure)

This framework supports **Allure Reporting**.

### Run Tests with Allure Formatter
```bash
behave -f allure_behave.formatter:AllureFormatter -o reports/allure-results
```

### View the Report
```bash
allure serve reports/allure-results
```

---

## ✅ Prerequisites

- Python 3.9+ installed
- Google Chrome (latest version)
- Allure Commandline installed ([Docs](https://docs.qameta.io/allure/))

---

## 🔧 Troubleshooting

- **`ModuleNotFoundError: No module named behave`**  
  → Run: `pip install behave`

- **Browser not opening**  
  → Ensure Chrome is installed and up-to-date.  
  → Delete cached drivers: `rm -rf ~/.wdm`

- **Reports not generated**  
  → Check if `reports/allure-results` exists after running tests.  
  → Ensure Allure CLI is installed and accessible via `$PATH`.

---

## 🤝 Contribution Guidelines

1. Create a feature branch:
   ```bash
   git checkout -b feature/my-new-feature
   ```
2. Commit changes:
   ```bash
   git commit -m "Added new feature"
   ```
3. Push branch and create a PR.

---

## 📜 License

This project is intended for internal QA automation at **Kuja**. Not licensed for external redistribution.
