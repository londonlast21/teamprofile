const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');

test('gets input for gitHub from getGitHubName())', () => {
    const testGitHubName = "londonlast7";
    const engineer = new Engineer("jack", 1, "jack@gmail.com", testGitHubName);

    expect(engineer.gitHubName).toBe(testGitHubName);
});