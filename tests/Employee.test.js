// const jest = require("jest");
const Employee = require('../lib/Employee')
//Test questions for Employee file
test("I should be able to create an object when creating employee", () => {
    const testVar = new Employee();

    expect(typeof testVar).toBe("object")
})