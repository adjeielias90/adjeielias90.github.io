// Part 1
// Comment Part 1 to run Part 2
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Teacher extends Person {
    constructor(teacherName, teacherEmail, subject) {
        super(teacherName, teacherEmail);
        this.subject = subject;
    }

    teach(){
        return this.name + " teaches " + this.subject
    }
}

let teacher = new Teacher("Eli", "eli@ecorp.llc", "Math");
console.log(teacher.teach());


// Part 2
// const Person = function () {
// };

// Person.prototype.initialize = function (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.describe = function () {
//     return this.name + ", " + this.age + " years old.";
// }

// const Teacher = function () {
// };

// Teacher.prototype = new Person();

// Teacher.prototype.teach = function (subject) {
//     console.log(`${this.name} is now teaching ${subject}`);
// }

// const el = new Teacher();
// el.initialize("Elias Adjei", 18);
// el.teach("AI");



