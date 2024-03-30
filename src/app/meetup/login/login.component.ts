import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createLoginForm();
  }
  
  loginForm!: FormGroup; // Свойство для хранения формы
  
  createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials)
      .subscribe(
        () => {
          // Успешный вход, перенаправляем на нужную страницу
          this.router.navigate(['/dashboard']);
        },
        (error: { message: string; }) => {
          // Ошибка входа, выводим сообщение об ошибке
          this.errorMessage = error.message;
        }
      );
  }
}
