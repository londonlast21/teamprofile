// NPM modules
const inquirer = require('inquirer');
const fs = require('fs');

// constructors
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


// global variables
const teamMembers = [];

// generate team member card
function makeTeamCards(){

    console.log("team func hit");
    //teamMembers.forEach()

};

// prompt user for initial input
function getInput() {
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What's employee's name?",
        validate: answer => {
            if (answer !=="") {
                return true;
            }
            return "Please enter a name";
        }
        },
        {
        type: 'input',
        name: 'id',
        message: "Enter employee's Id number",
        validate: answer => {
            if (answer !=="") {
                return true;
            }
            return "Please enter ID number"
        }
        },
        {
        type: 'input',
        name: 'email',
        message: "Enter employee's email",
        validate: answer => {
            if (answer !=="") {
                return true;
            }
            return "Please enter email"
        }
        },
        {
        type:'list',
        name: "role",
        message: "Select employee's role",
            choices: [
            "Manager",
            "Engineer",
            "Intern"
            ]
        },
        ])
        // end of list of questions

        // do what with the responses?
        .then(function(response){
           let name = response.name;
           let id = response.id;
           let email = response.email;
           let role = response.role;

            // if role = manager
            if(role === "Manager") {

                inquirer.prompt([{
                    type: "input",
                    name: "officeNumber",
                    message: "What is their office number?",
                    validate: answer => {
                        if (answer !=="") {
                            return true;
                        }
                        return "Please enter office number"
                    }
                }])
                .then(function(response){
                    
                    let officeNumber = response.officeNumber;
                    

                    // push new manager to team array
                    teamMembers.push(new Manager(name, id, email, officeNumber));
                    // test what is in array
                    console.log(teamMembers);

                    // function to generate managercard
                    //genManagerCard
                })


                
            }

            // if role = engineer
            if(role === "Engineer") {
                inquirer.prompt([{
                    type: "input",
                    name: "gitHubName",
                    message: "What is their GitHub username?",
                    validate: answer => {
                        if (answer !=="") {
                            return true;
                        }
                        return "Please enter GitHub name"
                    }
                }])
                .then(function(response){
                    let gitHubName = response.gitHubName;
                    // push new engineer to team array
                    teamMembers.push(new Engineer(name, id, email, gitHubName));

                    // test array value
                    console.log(teamMembers);


                })
            }

            // if role = intern
            if(role === "Intern") {
                inquirer.prompt([{
                    type: "input",
                    name: "school",
                    message: "What is their school's name?",
                    validate: answer => {
                        if (answer !=="") {
                            return true;
                        }
                        return "Please enter school name"
                    }
                }])
                .then(function(response){
                    let school = response.school;
                    // push new intern to array
                    teamMembers.push(new Intern(name, id, email, school));
                    // test what is in array
                    console.log(teamMembers);
                })
                
            }
          
            
        })

    
    
// below this is closure of getInput();
}

// function to repeat for more input
function addAnother() {
    inquirer.prompt([{
        type: "list",
        name: "restart",
        message: "Do you want to add another team member?",
        choices: [
            "Yes",
            "No"
        ]
    }])
    .then(function(response){
        if((response).restart === "Yes") {

            // start again
            getInput();
        }
        else if ((response).restart === "No"){
            // generate html page
            console.log("done");
            // generate html page
            writeFile();
        }
    })}



// // part that creates the HTML page
function writeFile(){
    const html = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Title</title>
    </head>
    <body>
    </body>
    </html>`;

    fs.writeFile('index.html', html, error => {
    if (error) {
        console.log(error);
    }
    // if no error
    console.log("hitting writeFile function");
    console.log(data);
    });
};

// call to start app
getInput();

module.exports = function () {};