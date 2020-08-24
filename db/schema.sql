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
