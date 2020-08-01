const Intern = require('../lib/Intern.js');
const Employee = require('../lib/Employee.js')

test('gets user input for school from getSchool())', () => {
    const testSchool = "Wisconsin State";
    const intern = new Intern("jack", 1, "jack@gmail.com", testSchool);

    expect(intern.school).toBe(testSchool);
})