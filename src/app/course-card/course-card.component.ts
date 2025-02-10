import { Component, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() { }
}
