// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    `
# ${title}
## Table of Contents:
1. Description
2. Installation
3. Usage
4. Contributons
5. Tests
6. License
7. GitHub
8. LinkedIn
9. Email
## Description
${description}.
## Installation
Use the command "${install}" to install any necessary dependencies.
## Usage
${usage}.
## Contributions
${contribution}.
## Tests
Stay up to date on tests as needed. To run tests, please use "${testing}".
## License
License: ${license}.
## GitHub
${github}
## LinkedIn
${linkedin}
## Email
${email}
            `
}

module.exports = generateMarkdown;
