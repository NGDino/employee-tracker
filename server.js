//npm tools using
const database = require('./db/index');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Choices = require('inquirer/lib/objects/choices');
const {
  prompts
} = require('inquirer');
// const { getAllRoles, addDepartment } = require('./db/index');



// database.ping(); // sanity checks

/*

╯
*/
funcsObject = {
  viewAllDepartments: () => {
    database.getAllDepartments().then(([rows]) => {

      const departments = rows.map(row => {
        // console.log(row.id, row.name)
        return {
          id: row.id,
          name: row.name
        }
      });

      console.table(departments);
    });
    // continueQuit();
  },

  viewAllRoles: () => {
    database.getAllRoles().then(([rows]) => {

      const roles = rows.map(row => {
        return {
          id: row.id,
          position: row.title,
          department: row.name,
          salary: row.salary
        }
      });
      console.table(roles);
    });
  },

  viewAllEmployees: () => {
    database.getAllEmployees().then(([rows]) => {
      const employees = rows.map(row => {
        return {
          id: row.id,
          first_name: row.first_name,
          last_name: row.last_name,
          title: row.title,
          department: row.department,
          salary: row.salary,
          manager: row.manager_id
        }
      });
      console.table(employees)
    });
  },

  addDept: () => {
    //variable to pass over necessary add information
    const deptName = "accounting";
    module.exports = deptName;
    database.addDepartment(deptName).then
    getDepartments()
  },

  addRole: () => {
    // inquirer.prompt([
    //   {
    //     name: ''
    //   }
    // ])
    //variable to pass over necessary add information
    const roleData = '("Sales Secretary", 45000, 3)';
    console.log(roleData)
    //pass data to index.js
    module.exports = roleData;
    database.addNewRole(roleData).then
    getRoles();
  },

  addEmployee: () => {
    //variable to pass over 
    const employeeData = '("Eugene", "Bonerface", 10, "Dick Cooke")'
    module.exports = employeeData;
    database.addNewEmployee(employeeData).then
    getEmployees();

  },

  closeServer: () => {
    console.log(GoodBye)
    // figure out how to exit npm
    process.exit
  }
};

//start of application


const promptPortal = () => {
  inquirer.prompt({
    type: 'list',
    name: 'menu',
    message: `




    ╭━━━╮╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╭╮
    ┃╭━━╯╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮╱╱┃┃
    ┃╰━━┳╮╭┳━━┫┃╭━━┳╮╱╭┳━━┳━━╮╭━━┳━━┳┻╮╭╋━━┫┃
    ┃╭━━┫╰╯┃╭╮┃┃┃╭╮┃┃╱┃┃┃━┫┃━┫┃╭╮┃╭╮┃╭┫┃┃╭╮┃┃
    ┃╰━━┫┃┃┃╰╯┃╰┫╰╯┃╰━╯┃┃━┫┃━┫┃╰╯┃╰╯┃┃┃╰┫╭╮┃╰╮
    ╰━━━┻┻┻┫╭━┻━┻━━┻━╮╭┻━━┻━━╯┃╭━┻━━┻╯╰━┻╯╰┻━╯
    ╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╭━╯┃╱╱╱╱╱╱╱┃┃
    ╱╱╱╱╱╱╱╰╯╱╱╱╱╱╱╰━━╯╱╱╱╱╱╱╱╰

    WELCOME TO DINOCORP EMPLOYEE PORTAL 

      What Would you like to do?`,
    choices: [{
        name: 'View all departments',
        value: "viewAllDepartments"
      },
      {
        name: 'View all roles',
        value: "viewAllRoles"
      },
      {
        name: 'View all employees',
        value: "viewAllEmployees"
      },
      {
        name: 'Add new department',
        value: "addDept"
      },
      {
        name: 'Add new Role',
        value: "addRole"
      },
      {
        name: 'Add new employee',
        value: "addEmployee"
      },
    ]
  }).then(answer => {
    //if it is  view selection
    if (answer.menu.includes("view")) {
      // console.log('view selection', answer.menu);
      //call the function to viw
      funcsObject[answer.menu]()
      
     

    } else {
      console.log('add selection', answer.menu)
      funcsObject[answer.menu]()
      
    
    }

  })
 
}
// const continueQuit = () =>{
//   inquirer.prompt({
//     name: 'continue',
//     type: 'confirm',
//     message: `
    
//     Anything Else?`,
//     default: true
//   }).then(somethingElse => {
//     if (somethingElse.continue) {
//       promptPortal();
//     } else {
//       funcsObject[closeServer]();
//     }
//   })
// }


promptPortal();