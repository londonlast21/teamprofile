// NPM modules
const inquirer = require('inquirer');
const fs = require('fs');
const http = require('http');
const path = require('path');


// constructors
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Employee = require('./lib/Employee.js');


// global variables
const teamMembers = [];
const fileName = ''

// generate team member card
function makeTeamCards(){

    console.log("team func hit");
    // test my data in array is persisting
    console.log(teamMembers);

    // create card for each object in array
    for (i = 0; i < teamMembers.length; i++) {
        // test what objects exist
        console.log("hi");
        // tell me what their info is
        
        // create card using input
        // let cardData ={ 
        //     "name" = name,
        //     "id" = id,
        //     "email" = email,
        // };
        // console.log(cardData);

    }

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
                    const manager = new Manager(name, id, email, officeNumber);
                    // push manager to team array
                    teamMembers.push(manager);
                    // test what is in array
                    console.log(teamMembers);

                    addAnother();
                    
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
                    const engineer = new Engineer(name, id, email, gitHubName);
                    // push new engineer to team array
                    teamMembers.push(engineer)

                    // test array value
                    console.log(teamMembers);

                    addAnother();


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
                    const intern = new Intern(name, id, email, school);
                    // push to array
                    teamMembers.push(intern);
                    // test what is in array
                    console.log(teamMembers);

                    addAnother();
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
            console.log(teamMembers);
            // generate html page from teamMember's array
            writeFile();
        }
    })}



// // part that creates the HTML page
function writeFile(data) {
    // test data in array is being transferred
    console.log("this is your list:")
    console.log(teamMembers);
    makeTeamCards();
        
    // first clear old data
    fs.writeFileSync('./dist/page.html', '', function (err) {
        if (err) throw err;
        console.log('Error');
    });
    // next generate new basic html structure
    fs.writeFileSync('./dist/page.html',
    `<!DOCTYPE html>
    <html lan="en">
        <head>
        <meta charset="utf-8">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./assets/css/style.css" />
        </head>
        <body>
            <h1>
                Team Profiles
            </h1>

            <div id="team-list-wrapper">
            </div>
        </body>
    </html>`, function (err){
        if (err) throw err;
        console.log("Error");
    });
    //makeTeamCards();
}
// call to start app
getInput()

module.exports = writeFile;