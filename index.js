const inquirer = require("inquirer");
const fs = require("fs");

// Define classes for different employee types
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Define an empty array that will hold all the employees
const employees = [];

// Function to add a new employee using Inquirer package
function addTeamMember() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Please enter the employee name:',
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee\'s ID:',
        },

        {
            type: "list",
            name: "role",
            message: "Select employee's role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter the employee\'s email:',
        },

        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username:",
            when: (input) => input.role === "Engineer",
        },

        {
            type: 'input',
            name: 'school',
            message: "Please enter the school name:",
            when: (input) => input.role === "Intern",
        },

        {
            type: 'input',
            name: 'office',
            message: "Please enter your office number::",
            when: (input) => input.role === "Manager",
        },
    ])

        .then(data => {
            let newEmployee;
            if (data.role === "Engineer") {
                newEmployee = new Engineer(data.employeeName, data.role, data.id, data.email, data.github);
            } else if (data.role === "Intern") {
                newEmployee = new Intern(data.employeeName, data.role, data.id, data.email, data.school);
            } else {
                newEmployee = new Manager(data.employeeName, data.role, data.id, data.email, data.office);
            }

            employees.push(newEmployee);

            addMore();
        })
}

addTeamMember()

// See if the user would like to add more employees
// If so, call addTeamMember otherwise print the object to console
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
                addTeamMember();
            } else {
                console.log(JSON.stringify(employees));
                updateHtml();
            }
        })
}

// This function creates the HTML file using data that was input
function updateHtml() {
    let htmlString = `
<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Horiseon</title>
</head>
<body> 
`

    employees.forEach(employee => {
        htmlString += `
    <div> ${employee.employeeName} </div>
    <div> ID: ${employee.id} </div>
    <div> Email: ${employee.email} </div>
    `
        console.log(employee.role);
        switch (employee.role) {
            case "Manager":
                htmlString += `
        <div> Office: ${employee.office} </div> 
        <br>
        `
                break;

            case "Intern":
                htmlString += `
        <div> School: ${employee.school} </div> 
        <br>
        `
                break;

            case "Engineer":
                htmlString += `
        <div> Github: ${employee.github} </div> 
        <br>
        `
                break;

        }
        htmlString += `
    
    `
    })

    htmlString += `
</body>

</html>
`

    writeToFile("test.html", htmlString);
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
