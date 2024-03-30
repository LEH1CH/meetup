import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false; // Флаг, указывающий на то, залогинен ли пользователь
  isAdmin$!: Observable<boolean>; // Объявляем isAdmin$ как Observable<boolean>

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated(); // Получаем статус аутентификации пользователя
    const userId: number = this.authService.getUserId()!;

    this.isAdmin$ = this.authService.isAdmin(userId);
  }

  logout(): void {
    this.authService.logout(); // Выполняем выход из системы
    window.location.reload(); // Перезагружаем страницу
  }
}
