import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: true
})
export class CourseCardComponent {

  @Input({
    required: true
  })
  course: Course;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() { }

  onCourseViewed() {
    console.log("Card Component - button clicked ...");

    this.courseEmitter.emit(this.course);
  }
}
