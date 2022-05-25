// Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenses = [
    {license: 'Academic Free License v3.0', key: 'afl-3.0',},
    {license: 'Apache license 2.0', key: 'apache-2.0',},
    {license: 'Artistic license 2.0', key: 'artistic-2.0',},
    {license: 'Educational Community License v2.0', key: 'ecl-2.0',},
    {license: 'Eclipse Public License 1.0', key: 'epl-1.0',},
    {license: 'Eclipse Public License 2.0', key: 'epl-2.0',},
    {license: 'European Union Public License 1.1', key: 'eupl-1.1',},
    {license: 'ISC', key: 'isc',},
    {license: 'Microsoft Public License', key: 'ms-pl',},
    {license: 'MIT', key: 'mit',},
    {license: 'Mozilla Public License 2.0', key: 'mpl-2.0',},
    {license: 'Open Software License 3.0', key: 'osl-3.0',},
  ]

  function getLicenseKey (inputLicense) {
    for(let i=0; i<licenses.length; i++) {
      if(licenses[i].license === inputLicense) {
        return licenses[i].key
      }
    }
  }

  return `# ${data.title}
![License: ${data.license}](https://img.shields.io/static/v1?label=License&message=${getLicenseKey(data.license)}&color=blue)

## Description 

${data.description}

## Table of Contents 

* [Description](#Description) 

* [Installation](#Installation)  

* [Usage](#Usage)  

* [License](#License)

* [Contributing](#Contributing) 

* [Tests](#Tests) 
 
* [Questions](#Questions)  

## Installation 

To install dependencies, run the following command: ${data.installation}\n

## Usage 

${data.usage}\n

## License

${data.title} is licensed under ${data.license}\n

## Contributing 

${data.contribute}\n

## Tests

To run tests, run the following command: ${data.test}\n

## Questions

If you have any questions, please fell free to contact me:\n

Email: ${data.email}\n

[GitHub Profile](https://github.com/${data.github})`;
}
  
//   export generateMarkdown
module.exports = { generateMarkdown }