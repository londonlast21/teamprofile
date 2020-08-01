const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

test('gets input for office number from getOfficeNumber())', () => {
    const testOfficeNumber = 123;
    const manager = new Manager("jack", 1, "jack@gmail.com", testOfficeNumber);

    expect(manager.officeNumber).toBe(testOfficeNumber);
});

// getRole
// test("getRole() should return \"Manager\"", () => {
//   const testValue = "Manager";
//   const employee = new Manager("jack", 1, "jack@gmail.com", 123);
//   expect(employee.getRole()).toBe(testValue);
// });