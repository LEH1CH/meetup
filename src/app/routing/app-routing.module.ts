import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { LoginComponent } from '../meetup/login/login.component';
import { MeetupListComponent } from '../meetup/meetup-list/meetup-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Перенаправление на страницу логина по умолчанию
  { path: 'login', component: LoginComponent },
  { path: 'meetups', component: MeetupListComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // Перенаправление на страницу логина в случае неверного URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
