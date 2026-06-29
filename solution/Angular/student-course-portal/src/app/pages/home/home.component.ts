import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); padding: 2.5rem; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); text-align: center;">
      <h1 style="color: #38bdf8; margin-bottom: 1rem;">Welcome to the {{ portalName }}</h1>
      <p style="color: #94a3b8; font-size: 1.1rem; line-height: 1.6; max-width: 600px; margin: 0 auto 2rem auto;">
        Manage your academic journey, browse courses, and enroll in your next semester classes effortlessly.
      </p>

      <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem;">
        <div style="background: rgba(15, 23, 42, 0.5); padding: 1rem 2rem; border-radius: 8px; border: 1px solid rgba(56,189,248,0.2);">
          <span style="display: block; font-size: 1.5rem; font-weight: 700; color: #38bdf8;">12</span>
          <span style="color: #94a3b8; font-size: 0.9rem;">Courses Available</span>
        </div>
        <div style="background: rgba(15, 23, 42, 0.5); padding: 1rem 2rem; border-radius: 8px; border: 1px solid rgba(34,197,94,0.2);">
          <span style="display: block; font-size: 1.5rem; font-weight: 700; color: #22c55e;">{{ enrolledCount }}</span>
          <span style="color: #94a3b8; font-size: 0.9rem;">Enrolled</span>
        </div>
        <div style="background: rgba(15, 23, 42, 0.5); padding: 1rem 2rem; border-radius: 8px; border: 1px solid rgba(168,85,247,0.2);">
          <span style="display: block; font-size: 1.5rem; font-weight: 700; color: #a855f7;">3.8</span>
          <span style="color: #94a3b8; font-size: 0.9rem;">Current GPA</span>
        </div>
      </div>

      <div>
        <button [disabled]="!isPortalActive" (click)="onEnrollClick()" style="background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%); color: white; border: none; padding: 0.75rem 2rem; font-size: 1.1rem; border-radius: 8px; cursor: pointer; font-weight: 600;">
          Enroll Now
        </button>
        <p *ngIf="message" style="margin-top: 1rem; color: #22c55e; font-weight: 500;">
          🎉 { { message } }
        </p>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  enrolledCount = 3;
  message = '';

  ngOnInit() {
    console.log('HomeComponent initialised — courses loaded');
  }

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }
}