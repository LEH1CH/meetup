// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model'; // Подразумевается, что у вас есть модель User
import { environment } from '../../environments/environment'; // Импортируем environment

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private apiUrl: string = environment.apiUrl; // Используем значение из environment
  private userSubject: Subject<any> = new Subject<any>(); // Создаем новый Subject
  
  constructor(private http: HttpClient) { }

  // Метод для получения списка пользователей
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  // Метод для получения Subject для отслеживания изменений в данных о пользователях
  getUserSubject(): Subject<any> {
    return this.userSubject;
  }

  // Добавляем метод для добавления нового пользователя
  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  // Метод для обновления данных о пользователях
  updateUsers(): void {
    this.http.get<User[]>(`${this.apiUrl}/users`).subscribe(
      (users) => {
        this.userSubject.next(users);
      },
      (error) => {
        console.error('Error updating users:', error);
      }
    );
  }

  // Добавляем метод для редактирования существующего пользователя
  editUser(userId: number, user: User): Observable<User> {
    const idString: string = userId.toString(); // Преобразуем id в строку
    return this.http.put<User>(`${this.apiUrl}/users/${idString}`, user);
  }

  // Добавляем метод для удаления пользователя
  deleteUser(userId: number): Observable<void> {
    const idString: string = userId.toString(); // Преобразуем id в строку
    return this.http.delete<void>(`${this.apiUrl}/users/${idString}`);
  }

  // Другие методы работы с пользователями (добавление, редактирование, удаление и т. д.) могут быть добавлены здесь
}
