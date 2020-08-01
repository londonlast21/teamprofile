const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('jack');

    expect(employee.name).toBe('jack');
    expect(employee.name.length).toBeGreaterThan(0);
})
