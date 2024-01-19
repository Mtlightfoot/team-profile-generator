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
// Create the inquirer prompt to ask for Manager Information
// Create the inquirer flow so that it will ask different set of inquirer prompts based on user choice
// Write html result to file 
