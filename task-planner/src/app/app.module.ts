import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TaskModule } from './task/task.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LoginComponent} from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
