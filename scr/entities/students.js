import { Student } from './student.js';

export class Students {
  constructor(studentsData) {
    this.students = [...studentsData];
  }

  get getInfo() {
    let i = 0;
    const student = [];

    this.students.forEach((obj) => {
      student[i] = new Student(
        obj.firstName,
        obj.lastName,
        obj.admissionYear,
        obj.courseName,
      );
      i++;
    });

    student.sort(function (a, b) {
      return b.admissinYear - a.admissinYear;
    });

    return student.map(
      (student) =>
        `${student.fullName} - ${student.courseName}, ${student.course} курс`,
    );
  }
}
