import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task} from '../task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  ngOnInit() {
    //console.log(`onInit`);
  }

  @Input() name;
  @Input() category;
  @Input() dateStart;
  @Input() dateEnd;
  @Input() status;

  @Output() addTaskEmitter = new EventEmitter<Task>();

  addTask() {
    var newTask = new Task(this.name, this.category, this.dateStart, this.dateEnd, this.status);
    this.addTaskEmitter.emit(newTask);
    this.name = '';
    this.category = '';
    this.dateStart = '';
    this.dateEnd = '';
    this.status = '';
  }

  constructor() { }
}
