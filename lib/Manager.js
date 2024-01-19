// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Require below includes module employee into file
const Employee = require("./Employee");

// Constructor function for creating manager information
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return 'Manager'
    };
};

module.exports = Manager;