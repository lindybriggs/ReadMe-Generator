// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const fs = require('fs');

let projectTitle = "My Project Title"
let descriptionBody = "lorem ipsum"
let install = "To install, simply clone down the repo from GitHub."
let usageEx = "This application is useful in many ways. For example, students can quickly build README files for assignments."
let yesContributing = "Suggested contributions are welcomed. Please fork this repo, build a branch to add, commit and push to, and create a pull request in GitHub to submit your suggestions."
let licenseType = "MIT"
let emailAddress = "briggs.lindy@yahoo.com"
let gitHub = "lindybriggs";

fs.writeFile("README.md", `
# ${projectTitle}
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

${descriptionBody}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${install}

## Usage

${usageEx}

## License

Note: This application is covered under an ${licenseType} license.

## Contributing

${yesContributing}

## Tests

## Questions

If you have additional questions, please reach out. Below are the best ways to contact me:

    Email: ${emailAddress}
    GitHub: ${gitHub}

`, (err) =>  err ? console.error(err) : console.log('Commit logged!')
);
