import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from '../task/task-list/task-list.component';
import { NotesListComponent } from '../task/notes-list/notes-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskEditComponent } from '../task/task-list/task-edit/task-edit.component';
import { AuthGuard } from '../shared/services/authguard.service';
import { LoginComponent } from '../login/login/login.component';
import { GuestGuard } from '../shared/services/guestguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: "full"},
  {
    path: 'tasks',
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: TaskListComponent },
      { path: ':id', component: TaskEditComponent, data: { someData: 'someValue' }}
    ]
  },
  {
    path: 'notes',
    component: NotesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'enter',
    component: LoginComponent,
    canActivate: [GuestGuard]
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
