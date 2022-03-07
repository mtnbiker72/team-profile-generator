const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an manager object", () => {
            const newEmployee = new Manager("name123", 13, "name123@email.com", "office12");
            expect(newEmployee).toBeTruthy();
        });
    });

    describe("Verify getName function", () => {
        it("should verify the employee name", () => {
            const newEmployee = new Manager("name123", 13, "name123@email.com", "office12");
            expect(newEmployee.getName()).toMatch("name123");
        });
    });

    describe("Verify getEmail function", () => {
        it("should verify the email address", () => {
            const newEmployee = new Manager("name123", 13, "name123@email.com", "office12");
            expect(newEmployee.getEmail()).toMatch("name123@email.com");
        });
    });

    describe("Verify getOfficeNumber function", () => {
        it("should verify the office number", () => {
            const newEmployee = new Manager("name123", 13, "name123@email.com", 12);
            expect(newEmployee.getOfficeNumber()).toEqual(12);
        });
    });

    describe("Verify getRole function", () => {
        it("should verify the role of the employee", () => {
            const newEmployee = new Manager("name123", 13, "name123@email.com", "office12");
            expect(newEmployee.getRole()).toMatch("Manager");
        });
    });
})