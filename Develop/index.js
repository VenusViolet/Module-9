// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('.')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'what is the name of your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of licence do you want to use for your proejct?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description for your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install your project?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What information will your user need to use your project?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How will your users contribute to your project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How will users run tests on the project?',
        default: 'npm run test',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
async function init() {
    const responses = await inquirer.prompt(questions);
    const data = generateMarkdown
    console.log('Generating README...');
    writeToFile('README.md', data);
}


// Function call to initialize app
init();
