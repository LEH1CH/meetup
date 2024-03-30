// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  private token: string | null = null;
  private isLoggedInFlag: boolean = false;
  private userRole: string | null = null;
  private userId: number | null = null;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }

  // Метод для проверки статуса авторизации
  isAuthenticated(): boolean {
    return this.isLoggedInFlag;
  }

  // Метод для установки идентификатора пользователя
  setUserId(userId: number): void {
    this.userId = userId;
  }

  // Метод для получения идентификатора текущего пользователя
  getUserId(): number | null {
    return this.userId;
  }

  // Метод для установки токена
  setToken(token: string): void {
    this.token = token;
  }

  // Метод для получения роли текущего пользователя
  getCurrentUserRole(): string | null {
    return this.userRole;
  }

  // Метод для получения роли пользователя из API
  getUserRoles(userId: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/user/${userId}/roles`);
  }

  // Метод для проверки, является ли пользователь администратором
  isAdmin(userId: number): Observable<boolean> {
    return this.getUserRoles(userId).pipe(
      map(roles => roles.includes('ADMIN'))
    );
  }

  // Метод для получения токена
  getToken(): string | null {
    return this.token;
  }
}
