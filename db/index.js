const connection = require('./config')
const server = require('../server')

//object store connection to database


class Database {
    //this is what makes template assigns connection to a property connection
    constructor(connection) {
        this.connection = connection;
    }

    // implement a findAllEmployees query
    // the connection should use the 'promise' method we want to wait for this
    // the connection should then call the 'query' method in order to run your commands
    // return the data

    getAllDepartments() {

        return this.connection
            .promise()
            .query('SELECT * FROM departments')
            .catch(err=>err)

    }

    getAllRoles() {

        return this.connection
            .promise()
            .query(`SELECT roles.id, roles.title, departments.name, roles.salary
                    FROM roles
                    Left JOIN departments ON roles.department_id = departments.id`)
            .catch(err=>err)

    }

    getAllEmployees(){

        return this.connection
        .promise()
        .query(`SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, employees.manager_id
                FROM employees
                Left JOIN roles ON employees.role_id = roles.id
                left JOIN departments ON roles.department_id = departments.id`)
        .catch(err=>err)
    }

    addDepartment(deptName) {

        return this.connection
            .promise()
            .query(`INSERT INTO departments (name)
                    VALUES ("${deptName}") `)
            .catch(err=>err)
    }

    addNewRole(roleData){

        return this.connection
            .promise()
            .query(`INSERT INTO roles (title, salary, department_id)
                    VALUES
                    ${roleData}`)
            .catch(err=>err)
    }

    addNewEmployee(employeeData){
        return this.connection 
            .promise()
            .query(`INSERT INTO employees
                    (first_name, last_name, role_id, manager_id)
                    VALUES 
                    ${employeeData}`)
            .catch(err=>err)
    }
}

// this is invoking the constructor with the property it expects
module.exports = new Database(connection);