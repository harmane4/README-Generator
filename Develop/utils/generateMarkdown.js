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
  return `# ${data.projectTitle}
  ![license](https://img.shields.io/badge/License-${data.License}-blue.svg)
  
  
  ## Description 
  ${data.Description}
  ${data.Motivation}
  ${data.Purpose}
  ${data.Knowledge}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation 
  ${data.Installation}
  
  ## Usage 
  ${data.Usage}
  
  ## License 
  ${data.License}
  MIT - (https://opensource.org/licenses/MIT)
  GLPv3 - (https://www.gnu.org/licenses/gpl-3.0)
  ISC - (https://opensource.org/licenses/ISC)
  
  © Elise Harman 2021
  
  ## Contributing 
  ${data.Contributing}
  
  ## Tests 
  ${data.Tests}
  
  ## Questions 
  If you have any questions and would like to reach me you can do so at my ${data.username} or ${data.email}
  
  `;
}

module.exports = generateMarkdown;
