const inquirer = require("inquirer");
const fs = require("fs");

// Define classes for different employee types
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Define an empty array that will hold all the employees
const employees = [];
// Define the different badges we'll use next to the type of employee
const badges = {
    "Engineer": "glasses-solid.svg",
    "Manager": "mug-hot-solid.svg",
    "Intern": "graduation-cap-solid.svg"
}

// Function to add a new employee using Inquirer package
// Validation is done on most of the answers
function addTeamMember(choices) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Please enter the employee name:',
            validate(answer) {
                if (!answer) {
                    return "Please enter a name!";
                }
                return true;
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee\'s ID:',
            validate(answer) {
                if (!answer) {
                    return "Please enter the employee ID!";
                }
                return true;
            }
        },

        {
            type: "list",
            name: "role",
            message: "Select employee's role",
            choices: choices
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter the employee\'s email:',
            validate(answer) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(answer)) {
                    return "Please provide a valid email address!"
                }
                return true
            }
        },

        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username:",
            when: (input) => input.role === "Engineer",
            validate(answer) {
                if (!answer) {
                    return "Please enter the Github Username!";
                }
                return true;
            }
        },

        {
            type: 'input',
            name: 'school',
            message: "Please enter the school name:",
            when: (input) => input.role === "Intern",
            validate(answer) {
                if (!answer) {
                    return "Please enter the school!";
                }
                return true;
            }
        },

        {
            type: 'input',
            name: 'office',
            message: "Please enter your office number::",
            when: (input) => input.role === "Manager",
            validate(answer) {
                if (!answer) {
                    return "Please enter your office number!";
                }
                return true;
            }
        },
    ])

        .then(data => {
            let newEmployee;
            if (data.role === "Engineer") {
                newEmployee = new Engineer(data.employeeName, data.id, data.email, data.github);
            } else if (data.role === "Intern") {
                newEmployee = new Intern(data.employeeName, data.id, data.email, data.school);
            } else {
                newEmployee = new Manager(data.employeeName, data.id, data.email, data.office);
            }

            employees.push(newEmployee);

            addMore();
        })
}

// The first team member to be added is the manager, so call the function and return Manager as choices
addTeamMember(["Manager"])

// See if the user would like to add more employees
// If so, call addTeamMember otherwise print the object to console
// Once this function is called once, only Intern and Engineer will be available to choose from
function addMore() {
    inquirer.prompt([
        {
            type: "list",
            name: "addMoreEmployees",
            message: "Would you like to add more employees?",
            choices: [
                "yes",
                "no"
            ]
        }])
        .then((response) => {
            if (response.addMoreEmployees === 'yes') {
                addTeamMember(["Engineer", "Intern"]);
            } else {
                updateHtml();
            }
        })
}

// This function creates the HTML file using data that was input
function updateHtml() {
    let htmlString = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="jumbotron text-center jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
    <div class="row justify-content-center">
`

    // Go through each employee in the object and create a new card 
    employees.forEach(employee => {
        htmlString += `
        <div class="col-lg-4 col-md-6 col-sm-12  no-gutters">
        <div class="card" style="width: 18rem;">
        <div class="card-header">
            <span style="font-style:italic">${employee.getName()}</span>
            <br>
            ${employee.getRole()} 
            <img src="../src/images/${badges[employee.getRole()]}">
        </div>
        <ul class="list-group ">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href=mailto:${employee.getEmail()}> ${employee.getEmail()}</a></li>
            `
        // Determine employee type so we can display the correct value
        switch (employee.getRole()) {
            case "Manager":
                htmlString += `
            <li class="list-group-item">Office: ${employee.getOfficeNumber()} </li>
            `
                break;

            case "Intern":
                htmlString += `
            <li class="list-group-item">School: ${employee.getSchool()} </li>
            `
                break;

            case "Engineer":
                htmlString += `
            <li class="list-group-item">Github: <a href=https://github.com/${employee.getGithub()} target="_blank"> ${employee.getGithub()} </a></li>
            `
                break;

        }
        htmlString += `
             </ul>
          </div>
        </div> `

    })
    htmlString += `
    </div >
    </body >

    </html> `

    writeToFile("dist/index.html", htmlString);

}

// Function to write the html file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your HTML file has been created")
    })
}
