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