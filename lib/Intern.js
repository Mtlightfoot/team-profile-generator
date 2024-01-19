// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Require below includes module employee into file
const Employee = require("./Employee");

// Constructor function for creating intern information
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern'
    };
};

module.exports = Intern;