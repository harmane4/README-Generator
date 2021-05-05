// Packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

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

// WRITE INFORMATION TO A FILE
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('README.md file created')
    );
}

const fileName = 'sampleREADME.md';

// TODO: Create a function to initialize app
function init() {
promiseThatResolvesToResponses.then((data) => {
let completedTemplate = generateMarkdown(data);
writeToFile(fileName, completedTemplate)

// Do something with generateMarkdown.js
})
} 

// Function call to initialize app
init();