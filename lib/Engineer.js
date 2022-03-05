const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, role, id, email, github) {
    super(name, id, email);
    this.role = role;
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

}

module.exports = Engineer; 
