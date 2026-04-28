import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>Welcome to Vibecode</h1><p>Your AI-powered development planner.</p><router-outlet />',
  styles: ['h1 { color: #667eea; font-size: 2rem; margin: 0; } p { color: #666; font-size: 1.2rem; margin: 1rem 0; }']
})
export class HomeComponent {}
