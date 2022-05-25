// Include file system and inquirer packages needed for this application.
const inquirer = require('inquirer');

const fs = require('fs');

const { generateMarkdown } = require('./utils/generateMarkdown')

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide an installation instructions for your application.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a usage instructions for your application.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide a contributing guidelines for your application.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide a test instructions for your application.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your application license?',
        choices: [
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Artistic license 2.0',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'ISC',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
        ],
        default: 'MIT',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub userneme?',
    },
];

// Create a function to initialize app
function init () {
    inquirer
        // Prompt the user
        .prompt ([...questions])
        // then pass the responses to the generateMarkdown function and write the response to a file
        .then((responses) => {
            fs.writeFile(`${responses.title}.md`,
                generateMarkdown(responses), 
                'utf8',
                (err) => {
                    err ? console.error(err) : console.log("success");
                }
            )
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init ()