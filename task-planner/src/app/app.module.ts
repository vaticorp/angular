import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StatisticComponent } from './task-list/statistic/statistic.component';
import { ListRowComponent } from './task-list/list-row/list-row.component';
import { TaskAddComponent } from './task-list/task-add/task-add.component';
import { FormsModule } from '@angular/forms';
import { TaskEditComponent } from './task-list/task-edit/task-edit.component';
import { LogDirective } from './shared/directives/log.directive';
import { NavDirective } from './shared/directives/nav.directive';
import { MyTitleCasePipe } from './shared/pipes/my-title-case.pipe';
import { DeleteService } from './shared/services/delete.service';
import { HelperService } from './shared/services/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    StatisticComponent,
    ListRowComponent,
    TaskAddComponent,
    TaskEditComponent,
    LogDirective,
    NavDirective,
    MyTitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MomentModule
  ],
  providers: [
    DeleteService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
