// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// Requiring modules.
const fs = require('fs');
const inquirer = require('inquirer')

// Using inquirer to prompt user with array of messages in command line.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
        },
        {
            type: 'list',
            message: 'What kind of license do you have for this project?',
            name: 'license',
            choices: [
                'GPLv3',
                'BSDv3',
                'MIT'
            ]
        },
        {
            type: 'list',
            message: 'For installation instructions, what command should be run to install dependencies?',
            name: 'installation',
            choices: [
                'npm i',
            ]
        },
        {
            type: 'list',
            message: 'What command should be run to run tests?',
            name: 'test',
            choices: [
                'npm test',
            ]
        },
        {
            type: 'input',
            message: 'What is an example of how this project is useful?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What should the user know about contributing to the repo?',
            name: 'contributing',
        },
    ])
// Using promise from .prompt to grab response values.
// Using string interpolation to build body of md file. Grabbing values from response.
    .then(({projectTitle, description, usage, installation, test, contributing, email, username, license}) => {
        let content = `
# ${projectTitle}
${generateLicenseBadge({license})}

## Description

${description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Usage

Below is an example of how this application can be used:

${usage}


## Installation

To install necessary dependencies, follow the below command: 

    ${installation}


## Tests

Run the following to test:

    ${test}


## Contributing

In terms of contributing to the repo, note the below:

    ${contributing}


## Questions

If you have additional questions, please reach out. Below are the best ways to contact me:

* You can reach me via email at: ${email}
* Visit my GitHub: [GitHub Repo](https://github.com/${username})


## License

${generateLicenseText({license})}

`;
// Using writeFile function from fs to generate the md file based on previously defined content..
        fs.writeFile('generatedREADME.md', content, (error) => console.error(error))
    })

// Created functions to create text and badge based on license type user selected using if/then statements.
function generateLicenseText({license}) {

    if (license === "MIT") {
        return "> **Note**: This application is covered under an MIT license."
    } else if (license === "GPLv3") {
        return "> **Note**: This application is covered under a GPLv3 license."
    } else {
        return "> **Note**: This application is covered under a BSDv3 license."
    }
}

function generateLicenseBadge({license}) {

    if (license === "MIT") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    } else if (license === "GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
}