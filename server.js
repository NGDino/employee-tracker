//npm tools using
const database = require('./db/index');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Choices = require('inquirer/lib/objects/choices');
// const { getAllRoles, addDepartment } = require('./db/index');



// database.ping(); // sanity checks

/*

╯
*/
function getDepartments(){
  database.getAllDepartments().then(([rows])=>{

    const departments = rows.map(row=>{
      // console.log(row.id, row.name)
      return {
        id: row.id,
        name: row.name
      }
    });

    console.table(departments);
  });
}

function getRoles(){
  database.getAllRoles().then(([rows]) =>{

    const roles = rows.map(row=>{
      return {
        id: row.id,
        position: row.title,
        department: row.name,
        salary: row.salary
      }
    });
    console.table(roles);
  });
}

function getEmployees(){
  database.getAllEmployees().then(([rows])=>{
    const employees= rows.map(row =>{
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
} ;

function addDept(){
  //variable to pass over necessary add information
    const deptName = "accounting";
    module.exports = deptName;
  database.addDepartment(deptName).then
    getDepartments()
};

function addRole(){
  //variable to pass over necessary add information
  const roleData = '("Sales Secretary", 45000, 3)';
  console.log(roleData)
  //pass data to index.js
  module.exports = roleData;
  database.addNewRole(roleData).then
    getRoles();
};

function addEmployee(){
  //variable to pass over 
  const employeeData = '("Eugene", "Bonerface", 10, "Dick Cooke")'
  module.exports = employeeData;
  database.addNewEmployee(employeeData).then
    getEmployees();

}

