import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: rgba(30, 41, 59, 0.8); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
      <div style="font-size: 1.25rem; font-weight: 700; color: #38bdf8; text-decoration: none;" routerLink="/">
        🎓 Student Course Portal
      </div>
      <div style="display: flex; gap: 1.5rem;">
        <a routerLink="/" style="color: #cbd5e1; text-decoration: none; font-weight: 500;" routerLinkActive="active-link">Home</a>
        <a routerLink="/courses" style="color: #cbd5e1; text-decoration: none; font-weight: 500;" routerLinkActive="active-link">Courses</a>
        <a routerLink="/enroll" style="color: #cbd5e1; text-decoration: none; font-weight: 500;" routerLinkActive="active-link">Enroll (Template)</a>
        <a routerLink="/enroll-reactive" style="color: #cbd5e1; text-decoration: none; font-weight: 500;" routerLinkActive="active-link">Enroll (Reactive)</a>
      </div>
    </nav>
  `,
  styles: [`
    a:hover { color: #38bdf8 !important; }
    .active-link { color: #38bdf8 !important; border-bottom: 2px solid #38bdf8; }
  `]
})
export class HeaderComponent {}