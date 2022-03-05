const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, role, id, email, office) {
    super(name, id, email);
    this.office = office;
    this.role = role;
  }

  getOfficeNumber() {
    return this.office;
  }
  getRole() {
    return "Manager"
  }

}

module.exports = Manager;

