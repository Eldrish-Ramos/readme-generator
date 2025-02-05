// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = 
[
    {
        name: 'firstInput',
        type: 'input',
        message: colors.brightMagenta(`My Message Here`)
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) =>{
        if (err) throw err
    });
};

// TODO: Create a function to initialize app
function init() 
{
    return inquirer.prompt(questions)
        .then(responses => {
            writeToFile('README.txt', responses)    
        })
};

// Function call to initialize app
init();