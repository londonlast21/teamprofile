const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee();
    
    expect(typeof(employee)).toBe("object");

})

test('substantiate Employee existence', () => {
    const name = "jack";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test('gets user input for name from getName()', () => {
    const testName = "jack";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
})


test('gets input for id from getId()', () => {
    const testId = 1;
    const employee = new Employee("Id", testId);
    expect(employee.getId()).toEqual(expect.any(Number));
})

test('gets input for email from getEmail())', () => {
    const testEmail = "jack@gmail.com";
    const employee = new Employee("Email", 1, testEmail);

    expect(employee.email).toBe(testEmail);
})

