// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input

// README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, 
// Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type:"input",
        name:"titleOfProject",
        message:"What is the title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Please write a description for your project"
    },
    {
        type:"input",
        name:"installation",
        message:"What are the steps needed to properlly install and run this project on a users machine?"
    },
    {
        type:"input",
        name:"usage",
        message:"What is your project used for?"
    },
    {
        type:"list",
        name:"license",
        message:"Which licence(s) are you using for your project?",
        choices:[
            "MIT license",
            "Mozilla Public License 2.0",
            "Common Development and Distribution License",
            "None"
        ]
    },
   
    {
        type:"input",
        name:"test",
        message:"How would you test this project?"
    },
    {
        type:"input",
        name:"githubUsername",
        message:"What is your Github username?"
    },
    {
        type:"input",
        name:"emailAddress",
        message:"What is your email address?"
    },
    {
        type:"confirm",
        name:"confirmContributors",
        message:"Are there any other contributors on this project?",
        default: false
    },
    {
        type:"input",
        name:"contributors",
        message:"Who contributed on this project?",
        when: ({ confirmContributors }) => confirmContributors
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            var generatedString = generateMarkdown(answers);

            fs.writeFile("./README.md", generatedString, () => {
                console.log("Successfully created README")
            })
        })
}

// Function call to initialize app
init();
