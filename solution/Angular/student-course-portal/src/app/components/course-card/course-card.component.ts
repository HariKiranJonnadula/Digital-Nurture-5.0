import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  template: `
    <div appHighlight [ngClass]="{'card--enrolled': isEnrolled, 'card--full': course.credits >= 4}" 
         [ngStyle]="{'border-left': '4px solid ' + getBorderColor()}"
         style="background: rgba(30, 41, 59, 0.5); border: 1px solid rgba(255, 255, 255, 0.05); padding: 1.25rem; border-radius: 8px; position: relative;">
      
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem;">
        <div>
          <h4 style="margin: 0; color: #f1f5f9;">{{ course.name }}</h4>
          <span style="color: #64748b; font-size: 0.85rem;">Code: {{ course.code }}</span>
        </div>
        <span [ngSwitch]="course.gradeStatus" style="font-size: 0.8rem; padding: 0.25rem 0.5rem; border-radius: 4px; font-weight: 600;">
          <span *ngSwitchCase="'passed'" style="background: rgba(34, 197, 94, 0.1); color: #22c55e;">Passed</span>
          <span *ngSwitchCase="'failed'" style="background: rgba(239, 68, 68, 0.1); color: #ef4444;">Failed</span>
          <span *ngSwitchCase="'pending'" style="background: rgba(100, 116, 139, 0.1); color: #94a3b8;">Pending</span>
        </span>
      </div>

      <p style="margin: 0 0 1rem 0; color: #94a3b8; font-size: 0.9rem;">
        Credits: <strong>{{ course.credits | creditLabel }}</strong>
      </p>

      <div style="display: flex; justify-content: space-between; align-items: center;">
        <button (click)="onEnrollToggle()" style="margin: 0; padding: 0.4rem 1rem; font-size: 0.85rem; font-weight: 600; background: isEnrolled ? '#ef4444' : '#22c55e';">
          {{ isEnrolled ? 'Unenroll' : 'Enroll' }}
        </button>
        <button (click)="isExpanded = !isExpanded" style="margin: 0; padding: 0.4rem 1rem; font-size: 0.85rem; font-weight: 500; background: #334155;">
          {{ isExpanded ? 'Hide Details' : 'Show Details' }}
        </button>
      </div>

      <div *ngIf="isExpanded" style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(255, 255, 255, 0.05); font-size: 0.85rem; color: #94a3b8;">
        This course counts towards core requirements. A score of 50% or above is required to pass.
      </div>
    </div>
  `
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Input() isEnrolled: boolean = false;
  @Output() enrollToggle = new EventEmitter<number>();

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) {
      console.log('Course changed:', changes['course'].previousValue, '->', changes['course'].currentValue);
    }
  }

  onEnrollToggle() {
    this.enrollToggle.emit(this.course.id);
  }

  getBorderColor(): string {
    switch (this.course.gradeStatus) {
      case 'passed': return '#22c55e';
      case 'failed': return '#ef4444';
      default: return '#94a3b8';
    }
  }
}