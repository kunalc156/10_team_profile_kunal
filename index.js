const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const loadHtml = require('./src/loadHtml');

const empArr = [];

const addManager = ()=> {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the manager's  name",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's id",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email address",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: "Do you want to add more employee?",
            default: false,
        }
    ])
    .then(managerDetails => {
        const {name, id, email, officeNumber} = managerDetails;
        const manager = new Manager(name, id, email, officeNumber);
        empArr.push(manager);
    });
}

const addEmployee = () => {
    return inquirer.prompt([
        
        {
            type: 'list',
            message: 'Select a role for the next employee',
            choices: ['Engineer', 'Intern'],
            name: 'role',
        },
        {
            type: 'input',
            message: "Enter the employee name",
            name: 'name'
        },
        {
            type: 'input',
            message: "Enter the employee id'",
            name: 'id',
        }, 
        {
            type: 'input',
            message: "Enter the employee email address",
            name: 'email',
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee github username",
            when: (input) =>input.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the school name",
            when: (input) => input.role === 'Intern',
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: "Do you want to add more employees?",
            default: false,
        }
    ])
    .then( employeeData =>{

        let {name, id, email, role, github, school, confirmAdd} = employeeData;

        let employee = null;

        if(role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
        } else if (role === 'Intern'){
            employee = new Intern(name, id, email, school);
        }

        empArr.push(employee);

        if (confirmAdd) {
            return addEmployee(empArr);
        } else {
            return empArr;
        }
    })
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, (err) => {
        err ? console.log(err) : console.log(`Successfully created index.html`);

    });
};

addManager()
.then(addEmployee)
.then((employeeData) => {
    return loadHtml(employeeData);
})
.then(loadHtml =>{
    writeFile(loadHtml);
})
.catch(err => {
    console.log(err);
});

