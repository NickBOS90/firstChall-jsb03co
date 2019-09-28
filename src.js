"use strict";

function sumarNumeros(n1, n2) {
  return n1 + n2;
}

function restarNumeros(n1, n2) {
  return n1 - n2;
}

function multiplicarNumeros(n1, n2) {
  return n1 * n2;
}

function dividirNumeros(n1, n2) {
  return n1 / n2;
}

function calculate(n1, n2, operator) {
  switch (operator) {
    case 0:
      sumarNumeros();
      break;
    case 1:
      restarNumeros();
      break;
    case 2:
      multiplicarNumeros();
      break;
    case 3:
      dividirNumeros();

    default:
      console.log("Operación no válida");
  }
}

calculate(2 + 3);

//--------------------------------------------//

// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   showInfo() {
//     console.log(this);
//   }
// }

// class Teacher extends Person {
//   constructor(name, subject, studentList) {
//     super(name);
//     this.subject = subject;
//     this.studentList = [];
//   }
//   assignStudents(students) {
//     this.studentList.push();
//   }
// }

// class Student extends Person {
//   constructor(name, course, group) {
//     super(name);
//     this.course = course;
//     this.group = group;
//   }
//   static registrateStudent(name, course, group) {
//     return new Student(name, course, group);
//   }
// }

// const myStudent1 = new Student("Nico", "JSBCO03", "1");
// const myStudent2 = new Student("Pepe", "JSBCO3", "1");

// const myJSStudents = [];
// myJSStudents.push(myStudent1, myStudent2);
// console.log(myJSStudents);

// const jSTeacher = new Teacher("Iván", "JavaScript", myJSStudents);
// console.log(jSTeacher);
