DROP DATABASE IF EXISTS dinocorp;
CREATE DATABASE dinocorp;
USE dinocorp;


--both referencing and referenced keys need same attributes (unsigned)


CREATE TABLE departments (
    id INTEGER UNSIGNED PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
    id INTEGER PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER UNSIGNED,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
	id INTEGER unsigned auto_increment PRIMARY KEY,
     first_name VARCHAR(30) NOT NULL,
     last_name VARCHAR(30) NOT NULL,
     role_id INTEGER UNSIGNED NOT NULL,
     manager_id VARCHAR(50),
     FOREIGN KEY (role_id) REFERENCES roles(id)
	
);