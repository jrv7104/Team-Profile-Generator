//Test questions for Intern file
const Intern = require('../lib/Intern')

//Test questions for Engineer file
test("I should be able to create an object when creating intern", () => {
    const testVar = new Intern();

    expect(typeof testVar).toBe("object")
})