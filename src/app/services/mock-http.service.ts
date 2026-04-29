import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface KanbanStatusResponse {
  todo: string[];
  in_progress: string[];
  in_review: string[];
  done: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MockHttpService {
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next({
          success: true,
          data: {
            username: credentials.username || 'User',
            role: 'developer',
            plan: 'pro',
          },
          message: 'Login successful',
        });
      }, 300);
    });
  }

  getKanbanStatus(): Observable<KanbanStatusResponse> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next({
          todo: ['card-1', 'card-2', 'demo-1'],
          in_progress: ['card-3', 'demo-2'],
          in_review: ['card-4', 'demo-3'],
          done: [],
        });
      }, 300);
    });
  }

  getTaskById(id: string): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        const tasks = [
          {
            id: 'card-1',
            title: 'Setup development environment',
            description: 'Install all necessary dependencies and configure the development setup',
            assignee: 'John Doe',
            priority: 'high',
            tags: ['setup', 'dev'],
          },
          {
            id: 'card-2',
            title: 'Design database schema',
            description: 'Create the database schema for user accounts and project management',
            assignee: 'Jane Smith',
            priority: 'medium',
            tags: ['database', 'design'],
          },
          {
            id: 'card-3',
            title: 'Implement API authentication',
            description: 'Set up JWT-based authentication and authorization mechanisms',
            priority: 'high',
            tags: ['api', 'security'],
          },
        ];
        const task = tasks.find((t) => t.id === id);
        observer.next({
          success: true,
          data: task || { id, title: 'Task', description: 'Description', priority: 'medium' },
        });
      }, 300);
    });
  }

  updateTask(task: any): Observable<ApiResponse<any>> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next({
          success: true,
          data: task,
          message: 'Task updated successfully',
        });
      }, 300);
    });
  }

  deleteTask(id: string): Observable<ApiResponse<any>> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next({
          success: true,
          message: 'Task deleted successfully',
        });
      }, 300);
    });
  }

  createTask(task: any): Observable<ApiResponse<any>> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next({
          success: true,
          data: task,
          message: 'Task created successfully',
        });
      }, 300);
    });
  }
}
