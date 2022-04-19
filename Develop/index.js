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
const inquirer = require('inquirer')

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
                'GPL',
                'BSD',
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
    .then((response) => {
        let content =`
# ${response.projectTitle}
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

${response.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Usage

Below is an example of how this application can be used:

${response.usage}


## Installation

To install necessary dependencies, follow the below command: 

    ${response.installation}


## Tests

Run the following to test:

    ${response.test}


## Contributing

In terms of contributing to the repo, note the below:

    ${response.contributing}


## Questions

If you have additional questions, please reach out. Below are the best ways to contact me:

    Email: ${response.email}
    GitHub: ${response.username}


## License

> **Note**: This application is covered under an ${response.license} license.

`;

        fs.writeFile('README.md', content, (error) => console.error(error))
    })