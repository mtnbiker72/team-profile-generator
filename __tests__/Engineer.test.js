const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("initialization", () => {
        it("should create an engineer object", () => {
            const newEmployee = new Engineer("name123", 13, "name123@email.com", "github123");
            expect(newEmployee).toBeTruthy();
        });
    });

    describe("Initialization", () => {
        it("should verify the employee name", () => {
            const newEmployee = new Engineer("name123", 13, "name123@email.com", "github123");
            expect(newEmployee.getName()).toEqual("name123");
        });
    });

    describe("Initialization", () => {
        it("should verify the email address", () => {
            const newEmployee = new Engineer("name123", 13, "name123@email.com", "github123");
            expect(newEmployee.getEmail()).toEqual("name123@email.com");
        });
    });

    describe("Initialization", () => {
        it("should verify the office number", () => {
            const newEmployee = new Engineer("name123", 13, "name123@email.com", "github123");
            expect(newEmployee.getGithub()).toEqual("github123");
        });
    });

    describe("Initialization", () => {
        it("should verify the role of the employee", () => {
            const newEmployee = new Engineer("name123", 13, "name123@email.com", "github123");
            expect(newEmployee.getRole()).toEqual("Engineer");
        });
    });
})