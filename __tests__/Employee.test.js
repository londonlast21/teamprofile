const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee();
    
    expect(typeof(employee)).toBe("object");

})

test('gets user input for name', () => {
    const name = "jack";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})



test('gets input for id', () => {
    const testId = 12345;
    const employee = new Employee("Id");
    expect(employee.getId()).toEqual(expect.any(Number));
})

test('gets input for email', () => {
    const employee = new Employee('jack');

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('gets user input for email', () => {
    const employee = new Employee('jack');

    expect(employee.getRole()).toEqual(expect.any(String));
})
