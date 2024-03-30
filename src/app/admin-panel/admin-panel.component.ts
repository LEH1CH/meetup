// admin-panel.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  addUser(newUser: User): void {
    this.userService.addUser(newUser).subscribe(
      () => {
        this.loadUsers(); // Reload the list of users after adding a new user
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

  /* editUser(updatedUser: User): void {
    this.userService.editUser(updatedUser).subscribe(
      () => {
        this.loadUsers(); // Reload the list of users after editing a user
      },
      (error) => {
        console.error('Error editing user:', error);
      }
    );
  } */

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.loadUsers(); // Reload the list of users after deleting a user
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
