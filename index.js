// Packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');

// Prompt(questions, answers). 
// Questions array containing question object
const promiseThatResolvesToResponses = inquirer.prompt([
    // TITLE OF PROJECT
    {
        type: 'input' ,
        name: 'projectTitle' ,
        message: "What is the title of your project?" ,
    },
    // DESCRIPTION
    {
        type: 'input' ,
        name: 'Description' , 
        message: 'Please describe your project:' ,
    },
    {
        type: 'input' , 
        name: 'Motivation' , 
        message: 'Describe the motivation for creating the project:' ,
    },
    {
        type: 'input' ,
        name: 'Purpose' , 
        message: 'Describe why you built the project:' ,
    },
    {
        type: 'input' ,
        name: 'Knowledge' , 
        message: 'Describe what you learn whilst building the project:' ,
    },
    
      // INSTALLATION
    { 
        type: 'input' ,
        name: 'Installation' ,
        message: 'Provide a description of how to get the development environment running:'
    },
    // USAGE
    { 
        type: 'input' ,
        name: 'Usage' ,
        message: 'Provide instructions and examples of use including screenshots:'
    },
     // LICENSE
    { 
        type: 'list' ,
        name: 'License' ,
        message: 'Chose license for README.md' ,
        choices: ['MIT' , 'GLPv3', 'ISC']
    },
    // CONTRIBUTING
    { 
        type: 'input' ,
        name: 'Contributing' ,
        message: 'Provide contributing guidelines: ' ,
    },
     // TESTS
    { 
        type: 'input' ,
        name: 'Tests' ,
        message: 'Provide examples on how to run tests: ' ,
    },
    // QUESTIONS
    { 
        type: 'input' ,
        name: 'username' ,
        message: 'Please provide a link to your GitHub profile: ' ,
    },
    { 
        type: 'input' ,
        name: 'email' ,
        message: 'What is your email? ' ,
    },
])

promiseThatResolvesToResponses.then(({projectTitle, Description, Motivation, Purpose, Knowledge, Installation, Usage, License, Contributing, Tests, username, email}) => {

// RESPONSE OBJECT
let readMeResponses = 

`# ${projectTitle}
![license](https://img.shields.io/badge/License-${License}-blue.svg)


## Description 
${Description}
${Motivation}
${Purpose}
${Knowledge}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation 
${Installation}

## Usage 
${Usage}

## License 
${License}
MIT - (https://opensource.org/licenses/MIT)
GLPv3 - (https://www.gnu.org/licenses/gpl-3.0)
ISC - (https://opensource.org/licenses/ISC)

© Elise Harman 2021

## Contributing 
${Contributing}

## Tests 
${Tests}

## Questions 
If you have any questions and would like to reach me you can do so at my ${username} or ${email}

`;
// WRITE INFORMATION TO A FILE
fs.writeFile(filename, readMeResponses, (err) => 
err ? console.log(err) : console.log('README.md file created'))
})

.catch , (err) => 
err ? console.error(err) : console.log('README.md file created')

let filename = 'README.md'
