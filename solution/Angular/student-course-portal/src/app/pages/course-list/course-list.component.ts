import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  template: `
    <div>
      <h2 style="color: #38bdf8; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">
        Available Course Catalog
      </h2>

      <div *ngIf="isLoading" style="text-align: center; padding: 3rem;">
        <span style="color: #38bdf8; font-size: 1.2rem;">Loading courses...</span>
      </div>

      <div *ngIf="!isLoading">
        <div *ngIf="courses.length === 0; else courseGrid" style="padding: 2rem; border: 1px dashed rgba(255,255,255,0.1); text-align: center; color: #64748b;">
          No courses available.
        </div>
        
        <ng-template #courseGrid>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <app-course-card 
              *ngFor="let course of courses; trackBy: trackByCourseId" 
              [course]="course" 
              [isEnrolled]="isCourseEnrolled(course.id)"
              (enrollToggle)="handleEnrollToggle($event)"
            >
            </app-course-card>
          </div>
        </ng-template>
      </div>

      <div *ngIf="selectedCourseId" style="margin-top: 2rem; padding: 1rem; background: rgba(34,197,94,0.1); border-left: 4px solid #22c55e; border-radius: 4px;">
        Selected Course ID for registration: <strong>{{ selectedCourseId }}</strong>
      </div>
    </div>
  `
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  isLoading = true;
  selectedCourseId: number | null = null;

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit() {
    // Simulate API delay
    setTimeout(() => {
      this.courseService.getCourses().subscribe(data => {
        this.courses = data;
        this.isLoading = false;
      });
    }, 1500);
  }

  isCourseEnrolled(courseId: number): boolean {
    return this.enrollmentService.isEnrolled(courseId);
  }

  handleEnrollToggle(courseId: number) {
    if (this.enrollmentService.isEnrolled(courseId)) {
      this.enrollmentService.unenroll(courseId);
      this.selectedCourseId = null;
    } else {
      this.enrollmentService.enroll(courseId);
      this.selectedCourseId = courseId;
      console.log('Enrolling in course: ' + courseId);
    }
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}