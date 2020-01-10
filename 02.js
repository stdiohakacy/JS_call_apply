let util = require('util');

function Person() {
    this.firstName = 'First Name',
    this.lastName = 'Last Name';
}

Person.prototype.doSth = function() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
};

function Student() {
    Person.call(this); // fix
    this.id = '1';
}

util.inherits(Student, Person);

let student = new Student();
student.doSth();
