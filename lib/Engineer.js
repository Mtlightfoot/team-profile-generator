// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Require below includes module employee into file
const Employee = require("./Employee");

// Constructor function for creating engineer information
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer'
    };
};

module.exports = Engineer;