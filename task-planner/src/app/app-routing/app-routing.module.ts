import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from '../task/task-list/task-list.component';
import { NotesListComponent } from '../task/notes-list/notes-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskEditComponent } from '../task/task-list/task-edit/task-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: "full"},
  {
    path: 'tasks',
    children: [
      { path: '', component: TaskListComponent },
      { path: ':id', component: TaskEditComponent, data: { someData: 'someValue' }}
    ]
  },
  {path: 'notes', component: NotesListComponent}
];

@NgModule({
  imports: [CommonModule,BrowserModule, RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
