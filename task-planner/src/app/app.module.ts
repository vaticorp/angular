import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StatisticComponent } from './task-list/statistic/statistic.component';
import { ListRowComponent } from './task-list/list-row/list-row.component';
import { TaskAddComponent } from './task-list/task-add/task-add.component';
import { FormsModule } from '@angular/forms';
import { TaskEditComponent } from './task-list/task-edit/task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    StatisticComponent,
    ListRowComponent,
    TaskAddComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
