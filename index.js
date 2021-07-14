//require programs
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs")

//require class systems
const Manager = require("./lib/Manager.js");
const Employee = require("./lib/Employee.js");
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
        // {
        //     type: 'input',
        //     message: 'What is your role?',
        //     name: 'role',
        // },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office',
        },
        // {
        //     type: 'input',
        //     message: 'What is your GitHub username?',
        //     name: 'Github',
        // },
        // {
        //     type: 'input',
        //     message: 'What school do you attend?',
        //     name: 'school',
        // },
    ]
).then((answers) => {
    // const data = `# ${title}`
    // * [Name]
    // * [ID]
    // * [Email]
    // * [Role]
    // * [Office]
    // * [GitHub]
    // * [School]
    const manager = new Manager(answers.name, answers.ID, answers.email, answers.office)
    console.log(manager)
    employeeArr.push(manager)
    //run menu function
    mainMenu()

//take answers and write to html
// writeToFile(fileName, data);
// console.log(answers)
// writeToFile("index.html", answers)
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
        }
        else{
            createHTML()
        }
    })
}

function createHTML() {
    let syntax =`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>`

    for(i=0; i<employeeArr.length; i++){
        if(employeeArr[i].getRole() == "Manager") {
            syntax += `
            <h2>Manager: ${employeeArr[i].name}</h2>`
        }
    }

    syntax +=`
    </body>
</html>`

    fs.writeFileSync('test.html' , syntax)
}
//create writeToFile function
function writeToFile(filename, data) {
    let string = generateMarkdown(data)
    false.writeFileSync(filename, string, err => {
        if(err) throw err;
        })
};

//Create function to initalize app
function init() {}

//Function call to initialize app
init();