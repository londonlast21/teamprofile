// NPM modules
const inquirer = require('inquirer');
const fs = require('fs');

// constructors
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


// global variables
const teamMembers = [];

// prompt user for initial input
inquirer.prompt([
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

        ])
        // do what with the answers?
        .then(function(response){
            // send this information to the card constructor
         
            console.log(response);
            // call function for getRole
            getRole();
            
        });

// make next function for role run
function getRole() {
    inquirer.prompt([
        {
            name: "role",
            type: "list",
            message: "What is the employee's role?",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    ])

    // do what with the data?
    .then(function(response){

        if((response).role === "Manager") {
            console.log("go to manager");

            //prompt for office number
            inquirer.prompt([{
                type: "input",
                name: "officeNumber",
                message: "What is their office number?",
            }]);


        } else if 
            ((response).role === "Engineer") {
            console.log("go to engineer");
            
            // prompt for github
            inquirer.prompt([{
                type:"input",
                name: "gitHubName",
                message: "What is their GitHub username?",
            }]);

         }
        else if
            ((response).role === "Intern") { 
                console.log("go to intern");

                // prompt for school
                inquirer.prompt([{
                    type: "input",
                    name: "school",
                    message: "What is the name of their school?",
                }]);
            }
        });

}

// functions to build each type of profile card
// function getManager() {

// }

    

    





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