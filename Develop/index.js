
// TODO: Include packages needed for this application
const fs = require('fs');
//fs for filesave
const inquirer = require('inquirer');
//inquirer for node
// TODO: Create an array of questions for user input
const questions = [''];inquirer.prompt([
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
        choices:["Mit, ,NONE"],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile('ReadMeGen.html','Read Me Generator',answers) (err); {
      if (err) throw err;
      console.log('File Created');
   }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
