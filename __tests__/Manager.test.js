const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an manager object", () => {
            const newEmployee = new Manager("name123", 13, "name123@email.com", "office12");
            expect(newEmployee).toBeTruthy();
        });
    });

    describe("Initialization", () => {
        it("should verify the employee name", () => {
            const newEmployee = new Manager("name123", 13, "name123@email.com", "office12");
            expect(newEmployee.getName()).toEqual("name123");
        });
    });

    describe("Initialization", () => {
        it("should verify the email address", () => {
            const newEmployee = new Manager("name123", 13, "name123@email.com", "office12");
            expect(newEmployee.getEmail()).toEqual("name123@email.com");
        });
    });

    describe("Initialization", () => {
        it("should verify the office number", () => {
            const newEmployee = new Manager("name123", 13, "name123@email.com", "office12");
            expect(newEmployee.getOfficeNumber()).toEqual("office12");
        });
    });

    describe("Initialization", () => {
        it("should verify the role of the employee", () => {
            const newEmployee = new Manager("name123", 13, "name123@email.com", "office12");
            expect(newEmployee.getRole()).toEqual("Manager");
        });
    });
})