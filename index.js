const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create Employee, Engineer, Intern and Manager classes so that it'll pass the test

// The inquirer prompt to ask for Manager Information
const employees = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Please enter the team managers name"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "Please enter the team managers employee ID",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter the team managers email address",
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "Please enter the team managers office number"
    },
];

function managerInput() {
    inquirer.prompt(managerQuestions).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
        employees.push(manager);
        optionsMenu();
    })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment")
            } else {
                console.log("Something else went wrong")
            }
        })
}

managerInput();

// Create the inquirer flow so that it will ask different set of inquirer prompts based on user choice
// Options question that gets asked after each employee is created
const optionsQuestion = [
    {
        type: 'list',
        name: 'optionsMenu',
        message: 'Would you like to:',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team']
    },
]

function optionsMenu() {
    inquirer.prompt(optionsQuestion).then((answers) => {
        console.log(employees);
        if (answers.optionsMenu === 'Add an Engineer') {
            engineerInput();
        } else if (answers.optionsMenu === 'Add an Intern') {
            internInput();
        } else {
            // HTML is generated
            writeToFile('README.md', generateTeam(employees));
        }
    })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment")
            } else {
                console.log("Something else went wrong")
            }
        })
}

// The inquirer prompt to ask for Engineer Information
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter the engineers name'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Please enter the engineers ID'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'PLease enter the engineers email address'
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'Please enter the engineers GitHub username'
    }
]

function engineerInput() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        employees.push(engineer);
        optionsMenu();
    })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment")
            } else {
                console.log("Something else went wrong")
            }
        })
}

// The inquirer prompt to ask for Intern Information
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Please enter the interns name'
    },
    {
        type: 'input',
        name: 'internId',
        message: 'Please enter the interns ID'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'PLease enter the interns email address'
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Please enter the interns school'
    }
]

function internInput() {
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        employees.push(intern);
        optionsMenu();
    })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment")
            } else {
                console.log("Something else went wrong")
            }
        })
}

// Write html result to file 