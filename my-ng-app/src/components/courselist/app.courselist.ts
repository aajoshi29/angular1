import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './app.course-list.html',
})
export class CourseListComponent {
  courses: Array<any>;
  total_fees: number;

  constructor() {
    this.total_fees = 0;
    this.courses = new Array<any>();
    this.courses.push({ id: 1, courseName: 'JavaScript', fees: 20000 });
    this.courses.push({ id: 2, courseName: 'Angular', fees: 30000 });
    this.courses.push({ id: 3, courseName: 'React', fees: 40000 });
    this.courses.push({ id: 4, courseName: 'Node.js', fees: 60000 });
    this.courses.push({ id: 5, courseName: 'VueJS', fees: 80000 });
  }

  changeTotal(fees: number, event: any) {
    if (event.target.checked) {
      this.total_fees += fees;
    } else {
      this.total_fees -= fees;
    }
  }
}
