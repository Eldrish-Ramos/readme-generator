// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = 
[
    {
        name: 'projectTitle',
        type: 'input',
        message: colors.bgBrightGreen(`Please enter a title for your project: `),
        default: 'Project Title',
        validate(projectTitle)
        {
            return projectTitle.trim().length > 0 ? true : "Please provide a valid project title!";
        }
    },
    {
        name: 'projectDesc',
        type: 'input',
        message: colors.bgYellow(`Please enter a description for your project: `),
        default: 'No Description Provided',
        validate(projectDesc)
        {
            return projectDesc.trim().length > 0 ? true : "Please provide a valid description for your project!";
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    fs.writeFile(fileName, JSON.stringify(data), (err) =>{

        if (err) throw err
    });
};

// TODO: Create a function to initialize app
function init() 
{
    return inquirer.prompt(questions)
        .then(responses => {
            const genMarkdown = generateMarkdown(questions)
            writeToFile('README.md', responses)
        })
};

// Function call to initialize app
init();