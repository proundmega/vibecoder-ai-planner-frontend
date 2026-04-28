import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface User {
  username: string;
  role: string;
  plan: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  plans: string[] = ['free', 'pro', 'enterprise'];

  constructor(private http: HttpClient) {}

  login(): void {
    this.errorMessage = '';

    this.http.post<User>(
      '/login',
      { username: this.username, password: this.password }
    ).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify(response));
        this.errorMessage = '';
      },
      error: (error) => {
        const errorMsg = error.error?.message || 'Login failed';
        this.errorMessage = errorMsg;
      },
    });
  }

  getDisplayPlans(): string[] {
    return this.plans;
  }
}
