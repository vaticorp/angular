import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  visible: boolean = false;
  editMode: boolean = false;
  indexArray: number;
  private _edit: Task;

  tasks: Task[] = [
    new Task('Название 1',
      'Категория 1',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Выполнено'),
    new Task('Название 2',
      'Категория 2',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Выполнено'),
    new Task('Название 5',
      'Категория 2',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Выполнено'),
    new Task('Название 3',
      'Категория 2',
      '19:15 08-10-2018',
      '12:15 09-10-2018',
      'Просрочено'),
    new Task(
      'Название 5',
      'Категория 3',
      '11:15 08-10-2018',
      '12:15 12-10-2018',
      'Запланировано'),
    new Task('Название 4',
      'Категория 2',
      '19:15 08-10-2018',
      '12:15 09-10-2018',
      'Просрочено'
    ),
    new Task('Название 6',
      'Категория 3',
      '11:15 08-10-2018',
      '12:15 12-10-2018',
      'Запланировано'
    ),
    new Task('Название 7',
      'Категория 3',
      '09:45 12-10-2018',
      '11:45 12-10-2018',
      'Выполнено'
    )
  ];

  deleteTaskFromArray(name: string) {
    var index = -1;
    index = this.tasks.findIndex((t) => t.name === name);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    return true;
  }

  cancel() {
    this.editMode = false;
  }

  editTask(editTask: Task, index:number) {
    this.indexArray = index;
    //this.tasks[index]
    this._edit = {...editTask};
    this.editMode = true;
  }

  saveEdit(task: Task) {
    this.tasks[this.indexArray] = task;
    this.editMode = false;
  }

  get edit() {
    return this._edit;
  }

  getTaskListsSize() {
    return this.tasks.length;
  }

  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(task => task.status === status).length;
  }

  addTask(task: Task) {
    this.tasks.push(task)
  }

  filterTasks($event) {
    this.visible = $event.target.checked;
  }

  constructor() { }

  ngOnInit() {
  }

}
