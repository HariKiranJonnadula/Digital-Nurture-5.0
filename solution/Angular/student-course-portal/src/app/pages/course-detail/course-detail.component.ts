import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255,255,255,0.1); padding: 2rem; border-radius: 12px;">
      <div *ngIf="course; else notFound">
        <h2 style="color: #38bdf8; margin: 0 0 1rem 0;">{{ course.name }}</h2>
        <p style="color: #94a3b8; margin: 0 0 0.5rem 0;">Course Code: <strong>{{ course.code }}</strong></p>
        <p style="color: #94a3b8; margin: 0 0 0.5rem 0;">Credits: <strong>{{ course.credits }}</strong></p>
        <p style="color: #94a3b8; margin: 0 0 1.5rem 0;">Status: <strong style="text-transform: capitalize;">{{ course.gradeStatus }}</strong></p>
        <button routerLink="/courses" style="margin: 0; background: #475569;">Back to List</button>
      </div>
      <ng-template #notFound>
        <h2 style="color: #ef4444;">Course Not Found</h2>
        <button routerLink="/courses" style="margin: 0; background: #475569;">Back to List</button>
      </ng-template>
    </div>
  `
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe(data => {
      this.course = data;
    });
  }
}