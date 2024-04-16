import { User } from './user.js';

export class Student extends User {
  constructor(firstName, lastName, admissinYear, courseName) {
    super(firstName, lastName);
    this.admissinYear = admissinYear;
    this.courseName = courseName;
  }
  get course() {
    const date = new Date().getFullYear();
    return date - this.admissinYear;
  }
}
