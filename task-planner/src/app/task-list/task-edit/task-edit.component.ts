import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../task.model';
import { HelperService } from '../../shared/services/helper.service';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit, OnDestroy, OnChanges {

 @Input() edit;
 @Output() cancelTaskEmitter = new EventEmitter();
 @Output() editTaskEmitter = new EventEmitter();

  constructor(private helperService: HelperService) {
  }

  cancel() {
    this.cancelTaskEmitter.emit();
  }

  saveTask() {
    this.editTaskEmitter.emit(this.edit);
  }

  ngOnInit() {
    console.log('onInit');
  }

  ngOnDestroy(): void {
    console.log('onDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.edit.status);
    console.log('ngOnChanges');
    if (this.edit.status == 'Выполнено') {
      alert('Запрещено редактировать задачу в статусе *Выполнено*!');
      this.cancel()
    }
  }
}
