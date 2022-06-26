const fs = require('fs');
const inquirer = require('inquirer')
const content = 'Some content!';




// var runfile = ('./utils/generateMarkdown.js')

var inquirer = require('inquirer');
const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown');
inquirer
.prompt([
    {
        type: 'input',
        message: 'what is the name of your project?',
        name: 'project',
       
    },
    {
        type: 'input',
        message: 'what license should your project have?',
        name: 'license',
       
    },
    {
      type: 'input',
      message: 'what command should be run to install dependencies?',
      name: 'dependencies',
      
  },
  {
    type: 'input',
    message: 'what command should be run to run tests?',
    name: 'tests',
    
  },
  {
    type: 'input',
    message: 'what is your GitHub username?',
    name: 'username',
    
  },
  {
    type: 'input',
    message: 'what is your email address?',
    name: 'email',
    
  },

])
.then(function(answers){
    console.log(answers)
    // generateMarkdown(answers)

    fs.writeFile('./README.md',generateMarkdown(answers), err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      }); 
    })

      .then(readme => {
          fs.writeFile('README.MD')
      })