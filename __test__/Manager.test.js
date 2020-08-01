const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

test('gets input for office number from getOfficeNumber())', () => {
    const testOfficeNumber = 123;
    const Manager = new Manager("jack", 1, "jack@gmail.com", testOfficeNumber);

    expect(manager.officeNumber).toBe(testOfficeNumber);
});

// getRole