
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");
const fileWrite = util.promisify(fs.writeFile);
//fs for filesave
const inquirer = require('inquirer');
//inquirer for node
const readme = ({ title, description, install, usage, contribution, testing, license, github, linkedin, email }) =>
// : Create an array of questions for user input

`
# ${title}
## Table of Contents:
1. Description
2. Installation
3. Usage
4. Contributons
5. Tests
6. License
7. GitHub
8. LinkedIn
9. Email
## Description
${description}.
## Installation
Use the command "${install}" to install any necessary dependencies.
## Usage
${usage}.
## Contributions
${contribution}.
## Tests
Stay up to date on tests as needed. To run tests, please use "${testing}".
## License
License: ${license}.
## GitHub
${github}
## LinkedIn
${linkedin}
## Email
${email}
            `



 const questions=[
    { 
        type:"input",
        name:"title",
        message:"what is your projects name?"
     },{
        type:"input",
        name:"description",
        message:"What is a good beginning discription for your project"

     },{
        type:"list",
        name:"license",
        choices:["Mit", "Eclipse" ,"GNU" , "ISC" , "NONE"],
        message:"Would you like to include a license for your project?"
     },{
        type:"input",
        name:"contribution",
        message:"Did you have any contributors on your project?"
     },{
      type:"input",
      name:"install",
      message:"Is there any specific install instructions?(packages)"

     },{
      type:"input",
      name:"usage",
      message:"What is the purpose of this program?"

     },{
      type:"input",
      name:"testing",
      message:"Does this program require any testing?"
     },{
      type:"input",
      name:"github",
      message:"What is your github account name?"
     },{
      type:"input",
      name:"email",
      message:"What is the email you want listed for your project?"
     },{
      type:"input",
      name:"linkedin",
      message:"What is the linkedin you want listed for your project?"
     }
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   // fs.writeFile(fileWrite);
   fs.writeFile(fileName,data, (err) => {
      if (err) 
      console.log(err);
      else{
         console.log("File written successfully\n");
         console.log("The written has the following contents:");
         console.log(fs.readFileSync("GeneratedFile.md", "utf8"));
   }
   }
   )}
// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then(readmeInfo => {
      const readmeData = readme(readmeInfo);
      writeToFile("GeneratedFile.md", readmeData)
      }
      )
      };
// Function call to initialize app
init();
