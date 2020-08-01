const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

function makeProfile() {
    this.employee;
}

makeProfile.prototype.initializeProfile = function () {

    // ask for the user to input information
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'name',
            message: "What's employee's name?",
            },
            {
            type: 'input',
            name: 'id',
            message: "Enter employee's Id number",
            },
            {
            type: 'input',
            name: 'email',
            message: "Enter employee's email",
            },
            {
            type: 'list',
            name: role,
            message: "Choose employee's role",
            choices: ['Manager', 'Engineer', 'Intern']
            },
        ])
        // do what with the answers?
        .then(answers => {
            this.employee = new Employee(name);
            this.employee = new Employee(id);
            this.employee = new Employee(email);
            this.employee = new Employee(role);

            this.startNewProfile();
        });
};

makeProfile.prototype.startNewProfile = function() {
    console.log('Your information is:');
    console.log(this.employee.name);
    console.log(this.employee.id);
    console.log(this.employee.email);
    console.log(this.employee.role);
}
// // part that creates the HTML page
//const fs = require('fs');

// const html = `<!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <title>Title</title>
//   </head>
//   <body>
//   </body>
// </html>`;

// fs.writeFile('index.html', html, error => {
//   if (error) {
//     console.log(error);
//   }
// });
// // end of HTML gen function

module.exports = function () {};