//require programs
const inquirer = require("inquirer");
const fs = require("fs")

//require class systems
const Manager = require("./lib/Manager.js");
// const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const employeeArr = []
//setup function to write data to html

//create inquire questions
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'ID',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office',
        },
    ]
).then((answers) => {
    const manager = new Manager(answers.name, answers.ID, answers.email, answers.office)
    console.log(manager)
    employeeArr.push(manager)
    //run menu function
    mainMenu()
}
);

function mainMenu(){
    inquirer.prompt([
        {
            name: "choice",
            message: "Would you like to keep adding employees?",
            type: "list",
            choices: ["Engineer", "Intern", "I am done"]
        }
    ]).then(answer => {
        if(answer.choice == "Engineer") {
            //run engineer inquirer prompts
            inquirer.prompt(
                [
                    {
                        type: 'input',
                        message: 'What is your name?',
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: 'What is your ID number?',
                        name: 'ID',
                    },
                    {
                        type: 'input',
                        message: 'What is your email?',
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: 'What is your GitHub username?',
                        name: 'Github',
                    },
                ]
                ).then((answers) => {
                    const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.Github)
                    console.log(engineer)
                    employeeArr.push(engineer)
                    return mainMenu()
                })
            }
                else if(answer.choice == "Intern") {
            //run intern inquirer prompts
            inquirer.prompt(
                [
                    {
                        type: 'input',
                        message: 'What is your name?',
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: 'What is your ID number?',
                        name: 'ID',
                    },
                    {
                        type: 'input',
                        message: 'What is your email?',
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: 'What school do you attend?',
                        name: 'school',
                    },
                ]
                ).then((answers) => {
                    const intern = new Intern(answers.name, answers.ID, answers.email, answers.school)
                    console.log(intern)
                    employeeArr.push(intern)
                    return mainMenu()
        })
        if(answer.choice == "I am done"){
            createHTML()
        }
    }
})
}

function managerHTML() {
    let syntax
    for(i=0; i<employeeArr.length; i++) {
    if(employeeArr[i].getRole() == "Manager") {
        syntax += `
        <h2>Manager: ${employeeArr[i].name}</h2>
        <h3>ID: ${employeeArr[i].ID}</h3>
        <h3>Email: ${employeeArr[i].email}</h3>
        <h3>Office number: ${employeeArr[i].office}</h3>`
    }
}
return syntax
}

function engineerHTML() {
    let syntax
    for(i=0; i<employeeArr.length; i++) {
        if(employeeArr[i].getRole() == "Engineer") {
            syntax += `
            <h2>Engineer: ${employeeArr[i].name}</h2>
            <h3>ID: ${employeeArr[i].ID}</h3>
            <h3>Email: ${employeeArr[i].email}</h3>
            <h3>GitHub: ${employeeArr[i].Github}</h3>`
        }
    }
return syntax
}

    function internHTML() {
        let syntax
        for(i=0; i<employeeArr.length; i++) {
            if(employeeArr[i].getRole() == "Intern") {
                syntax += `
                <h2>Intern: ${employeeArr[i].name}</h2>
                <h3>ID: ${employeeArr[i].ID}</h3>
                <h3>Email: ${employeeArr[i].email}</h3>
                <h3>School: ${employeeArr[i].school}</h3>`
            }
        }
        return syntax
    }

function createHTML() {
    console.log("hi")
    let syntax = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
    ${managerHTML()}
    ${engineerHTML()}
    ${internHTML()}

    
    </body>
</html>`
console.log(syntax)
    fs.writeFile('test.html', syntax)
}
