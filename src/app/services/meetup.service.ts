// meetup.service.ts

import { Injectable } from '@angular/core';
import { Meetup } from '../models/meetup.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {
  private meetups: Meetup[] = [];
  private apiUrl: string = environment.apiUrl; // Используем значение из environment
  private meetupSubject: Subject<any> = new Subject<any>(); // Создаем новый Subject
  constructor(private http: HttpClient) { }

  // Метод для получения списка митапов
  getMeetups(): Observable<Meetup[]> {
    return this.http.get<Meetup[]>(`${this.apiUrl}/meetups`);
  }

  // Метод для обновления данных о митапах
  updateMeetups(): void {
    this.http.get<Meetup[]>(`${this.apiUrl}/meetups`).subscribe(
      (meetups) => {
        this.meetupSubject.next(meetups);
      },
      (error) => {
        console.error('Error updating meetups:', error);
      }
    );
  }

  // Метод для получения Subject для отслеживания изменений в данных о митапах
  getMeetupSubject(): Subject<any> {
    return this.meetupSubject;
  }

  // Метод для добавления нового митапа
  addMeetup(title: string, description: string): void {
    const id = this.meetups.length + 1; // Просто увеличиваем длину массива на 1 для уникального ID
    const newMeetup: Meetup = { id, title, description };
    this.meetups.push(newMeetup);
  }

  // Метод для удаления митапа по его ID
  deleteMeetup(id: number): void {
    const index = this.meetups.findIndex(meetup => meetup.id === id);
    if (index !== -1) {
      this.meetups.splice(index, 1);
    }
  }

  // Метод для обновления информации о митапе
  updateMeetup(id: number, title: string, description: string): void {
    const index = this.meetups.findIndex(meetup => meetup.id === id);
    if (index !== -1) {
      this.meetups[index].title = title;
      this.meetups[index].description = description;
    }
  }
}
