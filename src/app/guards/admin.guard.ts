// admin.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Проверяем, залогинен ли пользователь
    if (this.authService.isAuthenticated()) {
      // Проверяем роль пользователя, если это администратор, разрешаем доступ к панели администратора
      if (this.authService.getCurrentUserRole() === 'admin') {
        return true;
      } else {
        // Если пользователь не администратор, перенаправляем его на другую страницу (например, на главную)
        this.router.navigate(['/']);
        return false;
      }
    } else {
      // Перенаправляем на страницу входа, если пользователь не залогинен
      this.router.navigate(['/login']);
      return false;
    }
  }
}
