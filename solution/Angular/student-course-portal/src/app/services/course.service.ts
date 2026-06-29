import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, name: 'Data Structures and Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Database Management Systems', code: 'CS202', credits: 3, gradeStatus: 'passed' },
    { id: 3, name: 'Web Application Development', code: 'CS303', credits: 4, gradeStatus: 'pending' },
    { id: 4, name: 'Software Engineering Concepts', code: 'CS404', credits: 3, gradeStatus: 'failed' },
    { id: 5, name: 'Cloud Computing Principles', code: 'CS505', credits: 4, gradeStatus: 'pending' }
  ];

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return of(this.courses.find(c => c.id === id));
  }

  addCourse(course: Course): Observable<void> {
    this.courses.push(course);
    return of(undefined);
  }
}