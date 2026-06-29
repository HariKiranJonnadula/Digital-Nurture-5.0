import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <main style="max-width: 1000px; margin: 2rem auto; padding: 0 1rem;">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}