const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("initialization", () => {
        it("should create a new employee object", () => {
            const newEmployee = new Employee("name123", 13, "name123@email.com", "github123");
            expect(newEmployee).toBeTruthy();
        });
    });

    describe("Verify Name", () => {
        it("should verify the employee name", () => {
            const newEmployee = new Employee("name123", 13, "name123@email.com", "github123");
            expect(newEmployee.getName()).toMatch("name123");
        });
    });

    describe("Verify Email address", () => {
        it("should verify the email address", () => {
            const newEmployee = new Employee("name123", 13, "name123@email.com", "github123");
            expect(newEmployee.getEmail()).toMatch("name123@email.com");
        });
    });

    describe("Verify role", () => {
        it("should verify the role", () => {
            const newEmployee = new Employee("name123", 13, "name123@email.com", "github123");
            expect(newEmployee.getRole()).toMatch("Employee");
        });
    });

    describe("Verify ID", () => {
        it("should verify the id of the employee", () => {
            const newEmployee = new Employee("name123", 13, "name123@email.com", "github123");
            expect(newEmployee.getId()).toEqual(13);
        });
    });
})