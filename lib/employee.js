class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;  
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "employee"
    }
}



/// how to generate new employee
const newEmployee = new Employee("jack", 1, "jack@gmail.com");
// check work
console.log(newEmployee);


module.exports = Employee;