import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: any[] = [];
  userSubscription!: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.userSubscription = this.userService.getUserSubject().subscribe((users: any[]) => {
      this.users = users;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  refreshUsers(): void {
    this.userService.updateUsers();
  }
}
