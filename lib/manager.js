const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name);

        this.officeNumber = officeNumber;
    }
    Manager.prototype.getOfficeNumber = function() {
        return `${this.name}'s office number is set to ${this.officNumber}`
    }
}

module.exports = Manager;

