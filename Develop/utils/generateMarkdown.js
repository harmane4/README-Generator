// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
switch (license) {
  case 'MIT':  
  return '[MIT](https://choosealicense.com/licenses/mit/)'
  break;
  case 'GLPv3':
    return '[GNU GLPv3](https://choosealicense.com/licenses/gpl-3.0/)'
    break;
  case 'ISC':
  return '[ISC](https://choosealicense.com/licenses/isc/)'
  break;
  default:
    return ""
    break;
}
}

function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':  
    return 'Copyright (c) 2021 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
    break;
    case 'ISC':
    return 'Copyright (c) 2021, Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies. THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.'
      break;
    case 'GLPv3':
    return 'Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. For the full license please visit [GNU GLPv3](https://choosealicense.com/licenses/gpl-3.0/)'
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
  ${renderLicenseLink(data.License)}
  ${renderLicenseSection(data.License)}

  
  
  ## Contributing 
  ${data.Contributing}
  
  ## Tests 
  ${data.Tests}
  
  ## Questions 
  If you have any questions or would like to report and issue please contact me at my ${data.username} or ${data.email}
  
  `;
}

module.exports = generateMarkdown;
