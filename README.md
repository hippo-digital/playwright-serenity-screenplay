# Serenity/Playwright Framework

Welcome to the Serenity/Playwright Framework! This project demonstrates how to use [Serenity/JS](https://serenity-js.org/) with [Playwright](https://playwright.dev/) for API and end-to-end web testing. It features reusable tasks, questions for validations, and custom configurations.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Tests](#running-tests)
  - [Project Structure](#project-structure)
- [Points of Interest](#points-of-interest)
  - [Web Testing](#web-testing)
  - [API Testing](#api-testing)
  - [Questions and Tasks](#questions-and-tasks)
  - [Logging and Debugging](#logging-and-debugging)
  - [Cookie Management](#cookie-management)

---

## Getting Started

### Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- NPM
- TypeScript
- Serenity/JS with Playwright

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd serenity-playwright-framework
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

1. Run **frontend** (web) tests:
   ```bash
   npx playwright test --project=frontend
   ```

2. Run **API** tests:
   ```bash
   npx playwright test --project=api
   ```

### Viewing Reports
After running the tests, view the generated test report with this command:

```bash
npx playwright show-report
```
This opens a detailed HTML report in your default browser, displaying test results, failures, and execution timelines.

---


## Project Structure

```
apps/
  ├── API/
  │   ├── functionalTests/         # Directory for API tests
  │   │   ├── questions/           # Questions for API assertions
  │   │   │   ├── responseQuestions.ts
  │   │   ├── tasks/               # Tasks for API requests
  │   │   │   ├── sendGetRequest.ts
  │   │   │   ├── sendPostRequest.ts
  │   │   ├── tests/               # API test cases
  │   │       ├── getPost.spec.ts
  │   │       ├── postRequest.spec.ts
  │   ├── config/                  # API configuration file
  │
  ├── Frontend/
      ├── FunctionalTests/
          ├── Pages/               # Page objects for UI tests
          │   ├── manageAccounts.page.ts
          │   ├── search.page.ts
          │   ├── welcome.page.ts
          ├── Questions/           # Questions for UI validations
          │   ├── isElementVisible.ts
          │   ├── elementText.ts
          ├── Tasks/               # Tasks encapsulating user actions
          │   ├── clickButton.ts
          │   ├── navigateToPage.ts
          ├── Tests/               # Test cases
              ├── webTests/
                  ├── manageAccounts.spec.ts
                  ├── viewVacancies.spec.ts
                  ├── search.spec.ts
```

---

## Points of Interest

### Web Testing

Web tests cover end-to-end scenarios for the Hippo Digital website. These tests interact with UI elements, navigate through pages, and validate expected behaviors.

- **Test Files**: Located in `apps/Frontend/FunctionalTests/Tests/webTests/`.
- **Page Objects**: Defined in `apps/Frontend/FunctionalTests/Pages`. Each page object uses `PageElement` and `By` locators from `@serenity-js/web`, ensuring modularity and reusability.
- **Examples**:
  - Validating the "Manage Accounts" link visibility.
  - Interacting with the "View our vacancies" button.
  - Searching for content and asserting results.

### API Testing

API testing is implemented using Serenity/JS with Playwright for robust endpoint validation.

- **Request Tasks**:
  - `sendGetRequest`: Fetches data from API endpoints.
  - `sendPostRequest`: Submits payloads to create or update resources.
- **Response Questions**:
  - `responseQuestions`: Validates response codes and content.

### Questions and Tasks

**Questions**:
- **In Web Tests**:
  - `isElementVisible`: Checks visibility of an element on the page.
  - `elementText`: Extracts and validates element text.
- **In API Tests**:
  - `responseQuestions`: Provides reusable assertions for status codes and response data.

**Tasks**:
- **In Web Tests**:
  - `clickButton`: Handles button-click actions (e.g., "Accept Cookies").
  - `navigateToPage`: Manages page navigation tasks.
- **In API Tests**:
  - `sendGetRequest` and `sendPostRequest`: Execute API requests with defined configurations.

### Logging and Debugging

- Logs provide detailed insights into test execution.
- Serenity/JS generates comprehensive reports highlighting test steps and outcomes.
- Add `console.log` statements in tasks and questions to capture runtime details for troubleshooting.

### Cookie Management

- Cookie banners are managed using a dedicated task that:
  - Identifies and clicks the "Accept Cookies" button.
  - Ensures smooth test execution by dismissing notices before interactions.

