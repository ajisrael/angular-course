import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CourseCardComponent]
})
export class AppComponent {

  courses = [...COURSES];

  constructor() { }

  ngOnInit() { }

  onCourseSelected(course: Course) {
    console.log('App Component - button clicked ...', course);
  }
}
