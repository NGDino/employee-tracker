INSERT INTO departments (name)
VALUES
('IT'),
('Procurement'),
('Sales'),
('Acounting');

INSERT INTO roles (title, salary, department_id)
VALUES
("BIG BO$$", 2500000, NULL),
("IT manager", 165000, 1),
("Tech Support", 70000, 1),
("junior developer", 65000, 1),
("Senior Developer", 120000, 1),
("Procurment Manager", 150000, 2),
("Junior Buyer", 50000, 2),
("Senior Buyer", 68000, 2),
("Sales Manager", 175000, 3),
("Sales Support", 45000, 3),
("Account Manager", 75000, 3),
("Sales Executive", 120000, 3);



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Neil", "Dino", 1, NULL),
("Adan", "Mccormick", 2, Neil),
("Clair", "Carter", 6, NULL),
("Dick", "Cooke", 9, NULL),
("Philip", "Huang", 5, 2),
("Berta", "Medina", 7, 6),
("Lino", "Hines", 7, 6),
("Alton", "Griffith", 12, 9),
("Les", "Villegas", 11, 9),
("Lillian", "Salazar", 10, 9),
("Katy", "Conner", 8, 6),
("Monty", "Baker", 7, 6),
("Lemuel", "Pugh", 5, 2),
("Minh", "Mcknight", 4, 2),
("Rodrick", "Montgomery", 3, 2),
("Vince", "Duke", 3, 2),
("Rosetta", "Navarro", 4, 2),
("Regina", "Castro", 5, 2),
("Mitchell", "Jefferson", 7, 6),
("Leopoldo", "Burke", 8, 6),
("Jana", "Martin", 10, 9),
("Alva", "Marshall", 11, 9),
("Sonja", "Decker", 12, 9),
("Cristobal", "Galvan", 3, 2),
("Elvin", "Campbell", 11, 9),
("Anne", "Watts", 11, 9),
("John", "Morales", 11, 9),
("Megan", "Rubio", 3, 2),
("Marianne", "Fox", 8,5),
("Lucile", "Mathews", 10, 8);