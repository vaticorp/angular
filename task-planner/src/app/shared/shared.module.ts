import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogDirective } from './directives/log.directive';
import { NavDirective } from './directives/nav.directive';
import { MyTitleCasePipe } from './pipes/my-title-case.pipe';
import { HelperService } from './services/helper.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    HelperService
  ],
  declarations: [
    LogDirective,
    NavDirective,
    MyTitleCasePipe
  ]
})
export class SharedModule { }
