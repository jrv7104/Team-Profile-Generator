//Test questions for Manager file

const Manager = require('../lib/Manager')

//Test questions for Engineer file
test("I should be able to create an object when creating manager", () => {
    const testVar = new Manager();

    expect(typeof testVar).toBe("object")
})