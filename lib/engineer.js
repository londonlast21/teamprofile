const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubName) {
        super(name, id, email);

        this.gitHubname = gitHubName;
    }


}

module.exports = Engineer;
