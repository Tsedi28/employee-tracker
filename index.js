const connection = require("./connection");

class employeeDB {

    constructor(connection) {
        this.connection = connection;
    }
   // Show all departments
   allDepartments() {
    return this.connection.promise().query(
        "SELECT department.id, department.name FROM department;"
    );
}
   // Add a department
   addDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", department);
}

}

module.exports = new employeeDB(connection);

// const mysql = require('mysql2');

// // Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // TODO: Add MySQL password here
//     password: '',
//     database: 'movies_db'
//   },
//   console.log(`Connected to the movies_db database.`)
// );

