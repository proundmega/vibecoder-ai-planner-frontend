import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, HttpClientTestingModule, LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty username, password, and error initially', () => {
    expect(component.username).toBe('');
    expect(component.password).toBe('');
    expect(component.errorMessage).toBe('');
  });

  it('should have initial plans list', () => {
    expect(component.plans).toEqual(['free', 'pro', 'enterprise']);
  });

  it('should set error when login fails', () => {
    component.login();

    httpMock.expectOne('/login').flush({
      error: { message: 'Invalid credentials' },
    });

    expect(component.errorMessage).toBe('Invalid credentials');
  });

  it('should store user data on successful login', () => {
    const mockResponse = {
      username: 'testuser',
      role: 'admin',
      plan: 'pro',
    };

    component.login();

    httpMock.expectOne('/login').flush(mockResponse);

    expect(component.errorMessage).toBe('');
    const stored = JSON.parse(localStorage.getItem('user') || '');
    expect(stored.username).toBe('testuser');
    expect(stored.role).toBe('admin');
    expect(stored.plan).toBe('pro');

    httpMock.verify();
  });

  it('should return correct display plans', () => {
    expect(component.getDisplayPlans()).toEqual(['free', 'pro', 'enterprise']);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
