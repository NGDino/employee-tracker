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

      console.table(departments)
      
    })
    
    // ;
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
    inquirer.prompt([
      {
        type: 'input',
        name: 'department',
        message: 'Name of new department'
      }
    ]).then(ans=>{
      console.log(ans.role)
      //variable to pass over necessary add information
    const deptName = ans.department;
    module.exports = deptName;
    database.addDepartment(deptName).then
    funcsObject['viewAllDepartments']()
      
    })
    
  },

  addRole: () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'role',
        message: 'Name of new role'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'How much does this role pay'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'How much does this role pay (no commas)'

      },
      {
        type: 'list',
        name: 'department',
        message: "Which department does this role belong to?",
        choices: [
                  {
                    name: "IT",
                    value: 1},
                  {
                    name: "Procurement",
                    value: 2
                  },
                  {
                    name: "Sales",
                    value: 3
                  }
                  ]
      }
    ]).then(ans=>{
    const roleData = `("${ans.role}", ${ans.salary}, ${ans.department})`;
    console.log(roleData)
    //pass data to index.js
    module.exports = roleData;
    database.addNewRole(roleData).then
    funcsObject['viewAllRoles']();

    })
    
   
  },

  addEmployee: () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'First Name of employee'
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Last Name of employee'
      },
      {
        type: 'list',
        name: 'job',
        message: 'What is this employees role',
        choices: [
           
          {
            name: "Tech Support", 
            value: [3, '"Adan McCormick"']
          },
          {
            name: "Junior Developer",
            value: [4, '"Adan McCormick"']
          },
          {
            name: "Senior Developer",
            value: [5, '"Adan McCormick"']
          },
          {
            name: "Junion Buyer",
            value: [7, '"Clair Carter"']
          },
          {
            name: "Senior Buyer",
            value: [8, '"Clair Carter"']
          },
          {
            name: "Sales Support",
            value: [10, '"Dick Cooke"']
          },
          {
            name: "Account Manager",
            value: [11, '"Dick Cooke"']
          },
          {
            name: "Sales Executive",
            value: [12, '"Dick Cooke"']
          }
        ]

      }//,
      // {
      //   type: 'list',
      //   name: 'manager',
      //   message: "Who is their manager",
      //   choices: ["Adan McCormick", "Clair Carter", "Dick Cooke"]
      // }
    ]).then(ans =>{
       //variable to pass over 
    const employeeData = `("${ans.firstName}", "${ans.lastName}", ${ans.job})`
    console.log(employeeData)
    module.exports = employeeData;
    database.addNewEmployee(employeeData).then
    funcsObject['viewAllEmployees']()

    })
   ;

  },

  closeServer: () => {
    console.log(GoodBye)
    // figure out how to exit npm
    process.exit
  }
  
}

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

    
 /*  originally had planned on trying to keep my code concise and
       taking the selection, turining it camelcase and then 
       using that to call function.  Got on help BCS and explained
      that it wouldnt work because the code below would return a string.  
      katheryn from BCS explained i could use object methods to accomplish 
      this
 
  .then(answer =>{
    //make string have first letter uppercase
    let choice = answer.menu
    const selection = choice.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join('')
      
      //need to lowercase first letter
      const camelCase = selection.charAt(0).toLowerCase() + selection.slice(1);
   */

  })
 
}
const continueQuit = ()=> {
  inquirer.prompt({
    name: 'continue',
    type: 'confirm',
    message: `
    
    Anything Else?`,
    default: true
  }).then(somethingElse => {
    if (somethingElse.continue) {
      promptPortal();
    } else {
      funcsObject[closeServer]();
    }
  })
}


promptPortal()
  