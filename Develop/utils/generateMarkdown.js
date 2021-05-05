// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch (license) {
  case 'MIT':  
  return "https://opensource.org/licenses/MIT"
  break;
  case 'GLPv3':
    return "https://www.gnu.org/licenses/gpl-3.0"
    break;
  case 'ISC':
  return 'https://opensource.org/licenses/ISC'
  break;
  default:
    return ""
    break;
}
}

// Function to generate markdown for README
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
  ${renderLicenseLink(data.License)}
  
  ## Contributing 
  ${data.Contributing}
  
  ## Tests 
  ${data.Tests}
  
  ## Questions 
  If you have any questions or would like to report and issue please contact me at my ${data.username} or ${data.email}
  
  `;
}

module.exports = generateMarkdown;
