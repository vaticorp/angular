import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './notes-list/notes-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ListRowComponent } from './task-list/list-row/list-row.component';
import { StatisticComponent } from './task-list/statistic/statistic.component';
import { TaskAddComponent } from './task-list/task-add/task-add.component';
import { TaskEditComponent } from './task-list/task-edit/task-edit.component';
import { FormsModule } from '@angular/forms';
import { DeleteService } from '../shared/services/delete.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DeleteService
  ],
  declarations: [
    NotesListComponent,
    TaskListComponent,
    ListRowComponent,
    StatisticComponent,
    TaskAddComponent,
    TaskEditComponent
  ]
})
export class TaskModule { }
