// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your ReadMe?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the title Github Repo?",
      name: "repo",
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
    let licenseInfo;
    function getBadge(num) {
      if (num === "Apache License 2.0") {
        licenseInfo = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      } else if (num === "MIT") {
        licenseInfo = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      } else if (num === "GNV GPLv3") {
        licenseInfo = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      } else {
        licenseInfo = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      }
    }
    getBadge(response.license);
    const allPageInfo = `# <ins>${response.title}</ins>

## <ins>Table of Contents</ins>

1. [Description](#description)
2. [Installation Instructions](#how_to_install)
3. [How to Use](#how_to_use)
4. [How to Contribute](#how_to_contribute)
5. [Tests](#test_cases)
6. [Badges and License](#badges_and_license)
7. [Credits/Collaborators](#credits_and_collaborators)
8. [Contact Information](#author_contact_information)

### <ins>Description </ins>
${response.description}

### <ins>How to Install </ins>
${response.instructions}

### <ins>How to Use </ins>
${response.usage}

### <ins>How to Contribute </ins>
[Code of Conduct Expected by All Contributors](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

[Report bugs or make feature requests](https://github.com/brischster/${response.repo}/tree/main/.github/ISSUE_TEMPLATE)

${response.contribution}

### <ins>Tests Cases </ins>
${response.tests}

### <ins>Badges and License</ins>
${response.license}

${licenseInfo}
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

### <ins>Credits and Collaborators</ins>
${response.credits}

### <ins>Author's Contact Information</ins>
${response.author}</br>
Please contact me with any questions or general feedback at my below email or through my Github profile.
[Github Profile](${response.github})</br>
[Email Ryan](mailto:${response.email})`;
    fs.writeFile("README_Generatored.md", allPageInfo, (err) => {
      err
        ? console.log(err)
        : console.log("Responses have been loaded to README file");
    });
  });
