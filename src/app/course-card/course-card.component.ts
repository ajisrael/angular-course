import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: true
})
export class CourseCardComponent {

  @Input()
  title: string = 'Default title';

  @Input()
  description: string = 'Default description';

  @Input()
  imgSrc: string;

  constructor() { }

  ngOnInit() { }
}
