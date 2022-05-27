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
      name: "license",
    },
    {
      type: "input",
      message:
        "Please provide a names of any contributors and/or other sources that need to be credited",
      name: "credits",
    },
    {
      type: "input",
      message: "Please provide author's full name",
      name: "author",
    },
    {
      type: "input",
      message: "Please provide the link to your Github Profile",
      name: "github",
    },
    {
      type: "input",
      message: "Please provide your email address",
      name: "email",
    },
  ])
  .then((response) => {
    const allPageInfo = `<ins> #${response.title}</ins>

## Table of Contents

1. [Description](#Description)
2. [Installation Instructions](#How_to_Install)
3. [How to Use](#How_to_Use)
4. [How to Contribute](#How_to_Contribute)
5. [Tests](#Test_Cases)
6. [Badges and License](#Badges_and_License)
7. [Credits/Collaborators](#Credits_and_Collaborators)
8. [Contact Information](#Author_Contact_Information)

<ins>### Description <a name="Description"></a></ins>
${response.description}

<ins>### How to Install <a name="How_to_Install"></a></ins>
${response.instructions}

<ins>### How to Use <a name="How_to_Use"></a></ins>
${response.usage}

<ins>### How to Contribute <a name="How_to_Install"></a></ins>
[Code of Conduct Expected by All Contributors](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

${response.contribution}

<ins>### Tests Cases <a name="Test_Cases"></a></ins>
${response.tests}

<ins>### Badges and License<a name="Badges_and_License"></a></ins>
${response.license}

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

<ins>### Credits and Collaborators<a name="Credits_and_Collaborators"></a></ins>
${response.credits}

<ins>### Author's Contact Information<a name="Author_Contact_Information"></a></ins>
${response.author}
[Github Profile](${response.github})
[Email Ryan](mailto:${response.email})`;
    fs.writeFile("README.md", allPageInfo, (err) => {
      err
        ? console.log(err)
        : console.log("Responses have been loaded to README file");
    });
  });
