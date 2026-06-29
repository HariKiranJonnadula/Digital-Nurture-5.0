import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); padding: 2rem; border-radius: 16px; max-width: 500px; margin: 0 auto;">
      <h2 style="color: #38bdf8; text-align: center; margin-bottom: 1.5rem;">Enrollment Form (Template-Driven)</h2>

      <div *ngIf="submitted" style="background: rgba(34, 197, 94, 0.1); border: 1px solid #22c55e; color: #4ade80; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center;">
        🎉 Enrollment request submitted successfully!
      </div>

      <form #enrollForm="ngForm" (ngSubmit)="onSubmit(enrollForm)">
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: #94a3b8;">Student Name</label>
          <input 
            type="text" 
            name="studentName" 
            #nameCtrl="ngModel" 
            [(ngModel)]="studentName" 
            required 
            minlength="3" 
            style="width: 100%; box-sizing: border-box; padding: 0.6rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: #0f172a; color: white;"
            [ngClass]="{'is-invalid': nameCtrl.invalid && nameCtrl.touched}"
          />
          <div *ngIf="nameCtrl.invalid && nameCtrl.touched" style="color: #ef4444; font-size: 0.85rem; margin-top: 0.25rem;">
            <span *ngIf="nameCtrl.errors?.['required']">Name is required.</span>
            <span *ngIf="nameCtrl.errors?.['minlength']">Name must be at least 3 characters.</span>
          </div>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: #94a3b8;">Email Address</label>
          <input 
            type="email" 
            name="studentEmail" 
            #emailCtrl="ngModel" 
            [(ngModel)]="studentEmail" 
            required 
            email 
            style="width: 100%; box-sizing: border-box; padding: 0.6rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: #0f172a; color: white;"
            [ngClass]="{'is-invalid': emailCtrl.invalid && emailCtrl.touched}"
          />
          <div *ngIf="emailCtrl.invalid && emailCtrl.touched" style="color: #ef4444; font-size: 0.85rem; margin-top: 0.25rem;">
            <span *ngIf="emailCtrl.errors?.['required']">Email is required.</span>
            <span *ngIf="emailCtrl.errors?.['email']">Enter a valid email address.</span>
          </div>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: #94a3b8;">Course ID</label>
          <input 
            type="number" 
            name="courseId" 
            #courseCtrl="ngModel" 
            [(ngModel)]="courseId" 
            required 
            style="width: 100%; box-sizing: border-box; padding: 0.6rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: #0f172a; color: white;"
            [ngClass]="{'is-invalid': courseCtrl.invalid && courseCtrl.touched}"
          />
          <div *ngIf="courseCtrl.invalid && courseCtrl.touched" style="color: #ef4444; font-size: 0.85rem; margin-top: 0.25rem;">
            <span *ngIf="courseCtrl.errors?.['required']">Course ID is required.</span>
          </div>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: #94a3b8;">Preferred Semester</label>
          <select 
            name="preferredSemester" 
            [(ngModel)]="preferredSemester" 
            required
            style="width: 100%; box-sizing: border-box; padding: 0.6rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: #0f172a; color: white;"
          >
            <option value="Odd">Odd Semester</option>
            <option value="Even">Even Semester</option>
          </select>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <label style="display: flex; align-items: center; gap: 0.5rem; color: #cbd5e1; cursor: pointer;">
            <input 
              type="checkbox" 
              name="agreeToTerms" 
              #termsCtrl="ngModel" 
              [(ngModel)]="agreeToTerms" 
              required
            />
            <span>I agree to terms & conditions</span>
          </label>
          <div *ngIf="termsCtrl.invalid && termsCtrl.touched" style="color: #ef4444; font-size: 0.85rem; margin-top: 0.25rem;">
            You must accept terms to submit.
          </div>
        </div>

        <div style="display: flex; gap: 1rem;">
          <button type="submit" [disabled]="enrollForm.invalid" style="flex: 1; margin: 0;">Submit</button>
          <button type="button" (click)="enrollForm.resetForm(); submitted=false" style="flex: 1; margin: 0; background: #475569;">Reset</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .is-invalid { border-color: #ef4444 !important; }
    input:focus { outline: none; border-color: #38bdf8 !important; }
  `]
})
export class EnrollmentFormComponent {
  studentName = '';
  studentEmail = '';
  courseId = null;
  preferredSemester = 'Odd';
  agreeToTerms = false;
  submitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      this.submitted = true;
    }
  }
}