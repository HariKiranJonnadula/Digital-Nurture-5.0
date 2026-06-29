import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255, 255, 255, 0.1); padding: 2rem; border-radius: 16px; max-width: 550px; margin: 0 auto;">
      <h2 style="color: #38bdf8; text-align: center; margin-bottom: 1.5rem;">Enrollment Form (Reactive)</h2>

      <form [formGroup]="enrollForm" (ngSubmit)="onSubmit()">
        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: #94a3b8;">Student Name</label>
          <input 
            type="text" 
            formControlName="studentName" 
            style="width: 100%; box-sizing: border-box; padding: 0.6rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: #0f172a; color: white;"
          />
          <div *ngIf="enrollForm.get('studentName')?.invalid && enrollForm.get('studentName')?.touched" style="color: #ef4444; font-size: 0.85rem; margin-top: 0.25rem;">
            Name is required (min 3 characters).
          </div>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: #94a3b8;">Email Address</label>
          <input 
            type="email" 
            formControlName="studentEmail" 
            style="width: 100%; box-sizing: border-box; padding: 0.6rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: #0f172a; color: white;"
          />
          <div *ngIf="enrollForm.get('studentEmail')?.invalid && enrollForm.get('studentEmail')?.touched" style="color: #ef4444; font-size: 0.85rem; margin-top: 0.25rem;">
            <span *ngIf="enrollForm.get('studentEmail')?.errors?.['required']">Email is required.</span>
            <span *ngIf="enrollForm.get('studentEmail')?.errors?.['email']">Enter a valid email.</span>
            <span *ngIf="enrollForm.get('studentEmail')?.errors?.['emailTaken']">Email address already registered.</span>
          </div>
        </div>

        <div style="margin-bottom: 1rem;">
          <label style="display: block; margin-bottom: 0.5rem; color: #94a3b8;">Primary Course Code</label>
          <input 
            type="text" 
            formControlName="courseCode" 
            style="width: 100%; box-sizing: border-box; padding: 0.6rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: #0f172a; color: white;"
          />
          <div *ngIf="enrollForm.get('courseCode')?.invalid && enrollForm.get('courseCode')?.touched" style="color: #ef4444; font-size: 0.85rem; margin-top: 0.25rem;">
            <span *ngIf="enrollForm.get('courseCode')?.errors?.['required']">Course Code is required.</span>
            <span *ngIf="enrollForm.get('courseCode')?.errors?.['noCourseCode']">Course code starting with XX is not allowed.</span>
          </div>
        </div>

        <!-- Dynamic Additional Courses -->
        <div style="margin-bottom: 1.5rem; padding: 1rem; background: rgba(15, 23, 42, 0.4); border-radius: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <span style="font-weight: 600; color: #38bdf8;">Additional Elective Courses</span>
            <button type="button" (click)="addAdditionalCourse()" style="margin: 0; padding: 0.3rem 0.75rem; font-size: 0.8rem;">+ Add Course</button>
          </div>
          
          <div formArrayName="additionalCourses">
            <div *ngFor="let ctrl of additionalCourses.controls; let i=index" style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
              <input 
                [formControlName]="i" 
                placeholder="Enter elective course code"
                style="flex: 1; padding: 0.5rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); background: #0f172a; color: white;"
              />
              <button type="button" (click)="removeAdditionalCourse(i)" style="margin: 0; padding: 0.5rem 1rem; background: #ef4444;">Remove</button>
            </div>
          </div>
        </div>

        <button type="submit" [disabled]="enrollForm.invalid" style="width: 100%; margin: 0;">Submit Request</button>
      </form>
    </div>
  `
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [this.simulateEmailCheck]],
      courseCode: ['', [Validators.required, this.noCourseCode]],
      additionalCourses: this.fb.array([])
    });
  }

  // Custom Synchronous Validator: noCourseCode (courseCode starting with 'XX' is disallowed)
  noCourseCode(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    if (value.toUpperCase().startsWith('XX')) {
      return { noCourseCode: true };
    }
    return null;
  }

  // Custom Async Validator: simulateEmailCheck (check if email contains 'test@')
  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const val = control.value || '';
        if (val.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }
      }, 800);
    });
  }

  // FormArray getter
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addAdditionalCourse() {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeAdditionalCourse(index: number) {
    this.additionalCourses.removeAt(index);
  }

  onSubmit() {
    if (this.enrollForm.valid) {
      console.log('Value (Value excludes disabled):', this.enrollForm.value);
      console.log('Raw Value (Value includes all controls):', this.enrollForm.getRawValue());
    }
  }
}