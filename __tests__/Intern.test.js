const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an manager object", () => {
            const newEmployee = new Intern("name123", 13, "name123@email.com", "life");
            expect(newEmployee).toBeTruthy();
        });
    });

    describe("Initialization", () => {
        it("should verify the employee name", () => {
            const newEmployee = new Intern("name123", 13, "name123@email.com", "life");
            expect(newEmployee.getName()).toEqual("name123");
        });
    });

    describe("Initialization", () => {
        it("should verify the email address", () => {
            const newEmployee = new Intern("name123", 13, "name123@email.com", "life");
            expect(newEmployee.getEmail()).toEqual("name123@email.com");
        });
    });

    describe("Initialization", () => {
        it("should verify the office number", () => {
            const newEmployee = new Intern("name123", 13, "name123@email.com", "life");
            expect(newEmployee.getSchool()).toEqual("life");
        });
    });

    describe("Initialization", () => {
        it("should verify the role of the employee", () => {
            const newEmployee = new Intern("name123", 13, "name123@email.com", "life");
            expect(newEmployee.getRole()).toEqual("Intern");
        });
    });
})