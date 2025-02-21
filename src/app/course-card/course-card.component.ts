import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: true,
  // Need to import the common module into the component for it to use the `ngClass` directive
  imports: [CommonModule]
})
export class CourseCardComponent {

  @Input()
  course: any;

  @Input({
    required: true
  })
  cardIndex: number;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() { }

  cardClasses() {
    return {
      'beginner': true,
      'course-card': true
    }
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("Card Component - button clicked ...");

    this.courseEmitter.emit(this.course);
  }
}
