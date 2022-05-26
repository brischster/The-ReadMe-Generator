// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your ReadMe?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a description of your project",
      name: "description",
    },
    {
      type: "input",
      message: "Please provide installation instructions",
      name: "instructions",
    },
    {
      type: "input",
      message: "Please provide usage information",
      name: "usage",
    },
    {
      type: "input",
      message: "Please provide contribution guidelines",
      name: "contribution",
    },
    {
      type: "input",
      message: "Please provide test instructions",
      name: "tests",
    },
    {
      type: "rawlist",
      message: "Please select a license for your project",
      choices: ["Apache License 2.0", "MIT", "GNV GPLv3", "ISC"],
      name: "description",
    },
    {
      type: "input",
      message: "Please provide a link for your Github profile",
      name: "github",
    },
    {
      type: "input",
      message: "Please provide your email address",
      name: "email",
    },
  ])
  .then((response) => {
    const allPageInfo = ``;
    fs.writeFile("README.md", JSON.stringify(response), (err) => {
      err
        ? console.log(err)
        : console.log("Responses have been loaded to README file");
    });
  });
