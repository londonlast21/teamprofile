const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('jack');

    expect(manager.name).toBe('jack');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

});