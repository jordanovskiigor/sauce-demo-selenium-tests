# Selenium WebDriver Automation Project

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Test Execution](#test-execution)
- [Folder Descriptions](#folder-descriptions)
- [Contributing](#contributing)
- [License](#license)

## Overview
This project automates end-to-end workflows for [Sauce Demo](https://www.saucedemo.com/) using Selenium WebDriver and Node.js. It follows the Page Object Model (POM) for scalability and includes features such as data-driven testing and reusable components.

## Features
- **Page Object Model (POM):** Organized structure for scalable and maintainable automation.
- **Data-Driven Testing:** Input data for tests is managed using JSON files.
- **Reusable Utilities:** Includes custom scripts for logging, data parsing, and browser setup/teardown.
- **Cross-Browser Support:** Tests can run on different browsers (e.g., Chrome, Firefox).

## Project Structure

selenium_project/

├── data/                   # Contains test data files for data-driven testing
├── node_modules/           # Contains all npm dependencies (auto-generated)
├── pages/                  # Contains Page Object files for each web page
├── reports/                # Placeholder for test reports and screenshots
├── utils/                  # Utility scripts for reusable functions
├── main.js                 # Main entry point for running Selenium tests
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Exact versions of installed dependencies
└── README.md               # Project documentation

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/<jordanovskiigor>/selenium_project.git