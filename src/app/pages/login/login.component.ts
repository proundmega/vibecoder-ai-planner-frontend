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
  isLoading = false;

  constructor(private http: HttpClient) {}

  async login(): Promise<void> {
    this.errorMessage = '';
    this.isLoading = true;

    try {
      await this.http.post<User>(
        '/login',
        { username: this.username, password: this.password }
      ).toPromise();
      localStorage.setItem('user', JSON.stringify({ username: this.username, role: 'developer', plan: 'pro' }));
      this.errorMessage = '';
    } catch (error) {
      const errorMsg = (error as any)?.response?.error?.message || 'Login failed';
      this.errorMessage = errorMsg;
    } finally {
      this.isLoading = false;
    }
  }

  async getDisplayPlans(): Promise<string[]> {
    return this.plans;
  }
}
