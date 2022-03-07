const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an manager object", () => {
            const newEmployee = new Intern("name123", 13, "name123@email.com", "life");
            expect(newEmployee).toBeTruthy();
        });
    });

    describe("Verify getName function", () => {
        it("should verify the employee name", () => {
            const newEmployee = new Intern("name123", 13, "name123@email.com", "life");
            expect(newEmployee.getName()).toMatch("name123");
        });
    });

    describe("Verify getEmail function", () => {
        it("should verify the email address", () => {
            const newEmployee = new Intern("name123", 13, "name123@email.com", "life");
            expect(newEmployee.getEmail()).toMatch("name123@email.com");
        });
    });

    describe("Verify getSchool function", () => {
        it("should verify the school input", () => {
            const newEmployee = new Intern("name123", 13, "name123@email.com", "life");
            expect(newEmployee.getSchool()).toMatch("life");
        });
    });

    describe("erify getRole function", () => {
        it("should verify the role of the employee", () => {
            const newEmployee = new Intern("name123", 13, "name123@email.com", "life");
            expect(newEmployee.getRole()).toMatch("Intern");
        });
    });
})