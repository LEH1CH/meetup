// user.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Проверяем, залогинен ли пользователь
    if (this.authService.isAuthenticated()) {
      // Проверяем роль пользователя, если это администратор, перенаправляем на страницу администратора
      if (this.authService.getCurrentUserRole() === 'admin') {
        this.router.navigate(['/admin-panel']);
        return false;
      }
      // Разрешаем доступ для обычного пользователя
      return true;
    } else {
      // Перенаправляем на страницу входа, если пользователь не залогинен
      this.router.navigate(['/login']);
      return false;
    }
  }
}
