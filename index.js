// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: colors.bgBrightGreen('Please enter a title for your project: '),
        default: 'Project Title',
        validate(projectTitle) {
            return projectTitle.trim().length > 0 ? true : 'Please provide a valid project title!';
        }
    },
    {
        name: 'projectDesc',
        type: 'input',
        message: colors.bgYellow('Please enter a description for your project: '),
        default: 'No Description Provided',
        validate(projectDesc) {
            return projectDesc.trim().length > 0 ? true : 'Please provide a valid description for your project!';
        }
    },
    {
        name: 'installation',
        type: 'input',
        message: colors.bgBrightGreen('Please provide installation instructions: '),
        default: 'npm install',
        validate(installation) {
            return installation.trim().length > 0 ? true : 'Please provide valid installation instructions!';
        }
    },
    {
        name: 'usage',
        type: 'input',
        message: colors.bgYellow('Please provide usage information: '),
        default: 'npm start',
        validate(usage) {
            return usage.trim().length > 0 ? true : 'Please provide valid usage information!';
        }
    },
    {
        name: 'license',
        type: 'list',
        message: colors.bgBrightGreen('Please choose a license for your project: '),
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
        default: 'MIT'
    },
    {
        name: 'contributing',
        type: 'input',
        message: colors.bgYellow('Please provide contribution guidelines: '),
        default: 'Contributions are welcome!',
        validate(contributing) {
            return contributing.trim().length > 0 ? true : 'Please provide valid contribution guidelines!';
        }
    },
    {
        name: 'tests',
        type: 'input',
        message: colors.bgBrightGreen('Please provide test instructions: '),
        default: 'npm test',
        validate(tests) {
            return tests.trim().length > 0 ? true : 'Please provide valid test instructions!';
        }
    },
    {
        name: 'github',
        type: 'input',
        message: colors.bgYellow('Please enter your GitHub username: '),
        validate(github) {
            return github.trim().length > 0 ? true : 'Please provide a valid GitHub username!';
        }
    },
    {
        name: 'email',
        type: 'input',
        message: colors.bgBrightGreen('Please enter your email address: '),
        validate(email) {
            return email.trim().length > 0 ? true : 'Please provide a valid email address!';
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README.md has been generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(responses => {
            const markdown = generateMarkdown(responses);
            writeToFile('README.md', markdown);
        })
        .catch(error => {
            console.error('Error generating README:', error);
        });
}

// Function call to initialize app
init();