import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { LogDirective } from './shared/directives/log.directive';
import { NavDirective } from './shared/directives/nav.directive';
import { MyTitleCasePipe } from './shared/pipes/my-title-case.pipe';
import { DeleteService } from './shared/services/delete.service';
import { HelperService } from './shared/services/helper.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TaskModule } from './task/task.module';
import { TaskListComponent } from './task/task-list/task-list.component';
import { StatisticComponent } from './task/task-list/statistic/statistic.component';
import { ListRowComponent } from './task/task-list/list-row/list-row.component';
import { TaskAddComponent } from './task/task-list/task-add/task-add.component';
import { TaskEditComponent } from './task/task-list/task-edit/task-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from './app-routing/app-routing.module';

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
    MomentModule,
    CoreModule,
    SharedModule,
    TaskModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    DeleteService,
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
