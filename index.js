const inquirer = require('inquirer'); 
const fs = require('fs')

const questions = [
    
    // TITLE OF PROJECT
    {
        type: 'input' ,
        name: 'Project Title' ,
        message: "What is the title of your project?" ,
    },
    // DESCRIPTION
    {
        type: 'input' ,
        name: 'Description' , 
        message: 'Please describe your project' ,
    },
    {
        type: 'input' ,
        name: 'Motivation' , 
        message: 'Describe the motivation for creating the project' ,
    },
    {
        type: 'input' ,
        name: 'Purpose' , 
        message: 'Describe why you built the project' ,
    },
    {
        type: 'input' ,
        name: 'Knowledge' , 
        message: 'Describe what you learn whilst building the project' ,
    },
    
      // INSTALLATION
    { 
        type: 'input' ,
        name: 'Installation' ,
        message: 'Provide a description of how to get the development environment running'
    },
    // USAGE
    { 
        type: 'input' ,
        name: 'Usage' ,
        message: 'Provide instructions and examples of use including screenshots'
    },
     // LICENSE
    { 
        type: 'list' ,
        name: 'License' ,
        message: 'Chose license for README.md' ,
        choices: ['MIT' , 'GNU GLPv3' , 'Apache License 2.0' , 'ISC License']
    },
    // CONTRIBUTING
    { 
        type: 'input' ,
        name: 'Contributing' ,
        message: 'Provide contributing guidelines ' ,
    },
     // TESTS
    { 
        type: 'input' ,
        name: 'Tests' ,
        message: 'Provide examples on how to run tests ' ,
    },

    // QUESTIONS
    { 
        type: 'input' ,
        name: 'username' ,
        message: 'Please provide a link to your GitHub profile] ' ,
    },

    { 
        type: 'input' ,
        name: 'email' ,
        message: 'What is your email? ' ,
    },

];

inquirer.prompt(questions).then((answers) => {
    console.log('\nREADME');
    console.log(JSON.stringify(answers, null, ' '));
});