const inquirer = require('inquirer')

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
        }
        {
        type: 'list',
        name: role,
        message: "Choose employee's role",
        choices: ['Manager', 'Engineer', 'Intern']
        },
    ])
    // do what with the answers?
    .then(answers => {
        console.log('Name:', answers.name);
        console.log('Id Number:', answers.id);
        console.log('Email:', answers.email);
        console.log('Role:', answers.role);

    });
// // part that creates the HTML page
const fs = require('fs');

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