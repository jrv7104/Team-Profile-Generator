// const jest = require("jest");
const Engineer = require('../lib/Engineer')

//Test questions for Engineer file
test("I should be able to create an object when creating engineer", () => {
    const testVar = new Engineer();

    expect(typeof testVar).toBe("object")
})