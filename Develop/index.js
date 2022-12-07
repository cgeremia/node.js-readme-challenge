// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Enter a brief explanation of your project.",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        console.log("Please provide a short description of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installInfo",
    message: "Provide any installation instructions here:",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Which license is used for this project:",
    choices: ["Apache", "Mozilla", "MIT", "GNU", "Boost", "ISC"],
    validate: (choicesLength) => {
      if (choicesLength.length <= 1) {
        return true;
      } else {
        return "Please select a license!";
      }
    },
  },
  {
    type: "input",
    name: "usageInfo",
    message: "Describe the main use case for this project/application:",
  },
  {
    type: "input",
    name: "contributionsInfo",
    message: "Are their any guidlines for contributing to this project:",
  },
  {
    type: "input",
    name: "testsInfo",
    message: "Which tests would you like to include:",
  },
  {
    type: "input",
    name: "githubUser",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "emailInfo",
    message: "Please enter your email address.",
  },
];

