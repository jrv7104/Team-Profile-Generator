//require programs
const inquirer = require("inquirer");
const jest = require("jest");

//require class systems
const Manager = require(lib/Manager.js);
const Employee = require(lib/Employee.js);
const Engineer = require(lib/Engineer.js);
const Intern = require(lib/Intern.js);

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
            message: 'What is your role?',
            name: 'role',
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?'
            name: 'Github',
        },
        {
            type: 'input',
            message: 'What school do you attend?',
            name: 'school',
        },
    ]
).then((answers) => {
    const data = `# ${title}`
    * [Name]
    * [ID]
    * [Email]
    * [Role]
    * [Office]
    * [GitHub]
    * [School]
//take answers and write to html
writeToFile(fileName, data);
console.log(answers)
writeToFile("index.html", answers)
}
);

//create writeToFile function
function writeToFile(filename, data) {
    let string = generateMarkdown(data)
    false.writeFileSync(filename, string, err => {
        if(err throw err;
        })
};

//Create function to initalize app
function init() {}

//Function call to initialize app
init();