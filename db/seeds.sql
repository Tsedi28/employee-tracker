use employees;

INSERT INTO department
(name)
VALUES
('Human Resources'),
('Information Technology'),
('Accounting'),
('Marketing');

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Tedros', 'Abay', 1, NULL),
('Kandra', 'Willson', 2, 1),
('Aisha', 'Waddy', 3, NULL),
('Ermiyas', 'Kassa', 4, 3), 
('Jasmine', 'Yassin', 4, 3), 
('Max', 'George', 5, NULL), 
('Tyler', 'Pollack', 6, 5),
('Trever', 'Shaffer',7, NULL),

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('HR Manager', 100000, 1),
    ('HR', 50000, 1),
    ('Marketing Director', 140000, 2),
    ('Sales', 65000, 2),
    ('IT Director', 195000, 3),
    ('Desktop Support', 100000, 3),
    ('Account Manager', 110000, 4),
    ('Accountant', 90000, 4);