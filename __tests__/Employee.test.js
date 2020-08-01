const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('jack');

    expect(employee.name).toBe('jack');
    expect(employee.name.length).toBeGreaterThan(0);

})

test('gets input for id', () => {
    const employee = new Employee('jack');
    expect(employee.getId()).toEqual(expect.any(Number));

    employee.id = [];

    expect(employee.getId()).toEqual(false);
})

