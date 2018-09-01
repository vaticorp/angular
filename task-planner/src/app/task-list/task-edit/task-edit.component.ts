import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

 @Input() edit;
 @Input() name;
 @Input() category;
 @Input() dateStart;
 @Input() dateEnd;
 @Input() status;
 @Output() cancelTaskEmitter = new EventEmitter();
 @Output() editTaskEmitter = new EventEmitter();

  constructor() {
  }

  cancel() {
    this.cancelTaskEmitter.emit();
  }

  saveTask(nam: string) {
    var editTask  = new Task(this.name, this.category, this.dateStart, this.dateEnd, this.status);
    this.editTaskEmitter.emit(editTask);
  }

  ngOnInit() {
    this.name      = this.edit.name;
    this.category  = this.edit.category;
    this.dateStart = this.edit.dateStart;
    this.dateEnd   = this.edit.dateEnd;
    this.status    = this.edit.status;
  }
}
