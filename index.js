
const fs = require('fs');
const util = require('util');
const readMeGen = require("generateMarkdown.js");
const fileWrite = util.promisify(fs.writeFile);
//fs for filesave
const inquirer = require('inquirer');
//inquirer for node
// : Create an array of questions for user input
function prompt(){
 return inquirer.prompt([
    { 
        type:"input",
        name:"projectName",
        message:"what is your projects name?"
     },{
        type:"input",
        name:"description",
        message:"What is a good beginning discription for your project"

     },{
        type:"list",
        name:"gitHubLicense",
        choices:["Mit, Eclipse ,GNU , ISC , NONE"],
        message:"Would you like to include a license for your project?"
     },{
        type:"input",
        name:"Contribution",
        message:"Did you have any contributors on your project?"
     },{
      type:"input",
      name:"install",
      message:"Is there any specific install instructions?(packages)"

     },{
      type:"input",
      name:"usages",
      message:"What is the purpose of this program?"

     },{
      type:"input",
      name:"testing",
      message:"Does this program require any testing?"
     },{
      type:"input",
      name:"install",
      message:"Is there any specific install instructions?(packages)"
     },{
      type:"input",
      name:"gitHubAccount",
      message:"What is your github account name?"
     },{
      type:"input",
      name:"email",
      message:"What is the email you want listed for your project?"
     }
  ]). then(function(answers){
console.log(answers)

})
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileWrite);
   fs.appendFile('ReadMeGen.html','Read Me Generator',answers) (err); {
      console.log('File Created');
   }
}

// TODO: Create a function to initialize app
//FIGURE OUT WHY AWAIT DOESNT WORK
function init() {
   answers = then.prompt();
   const ReadMeGen = fileWrite(answers);
   console.log('File Written');
} 

// Function call to initialize app
init();
