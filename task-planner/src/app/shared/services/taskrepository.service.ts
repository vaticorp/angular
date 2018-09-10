import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { Task } from '../../task/task-list/task.model';

@Injectable()
export class TaskRepositoryService {

  private _tasks: Task[] = [
    new Task('1',
      'Название 1',
      'Категория 1',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Выполнено'),
    new Task('2',
      'Название 2',
      'Категория 2',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Выполнено'),
    new Task('3',
      'Название 5',
      'Категория 2',
      '18:15 08-10-2018',
      '20:15 08-10-2018',
      'Выполнено'),
    new Task('4',
      'Название 3',
      'Категория 2',
      '19:15 08-10-2018',
      '12:15 09-10-2018',
      'Просрочено'),
    new Task('5',
      'Название 5',
      'Категория 3',
      '11:15 08-10-2018',
      '12:15 12-10-2018',
      'Запланировано'),
    new Task('6',
      'Название 4',
      'Категория 2',
      '19:15 08-10-2018',
      '12:15 09-10-2018',
      'Просрочено'
    ),
    new Task('7',
      'Название 6',
      'Категория 3',
      '11:15 08-10-2018',
      '12:15 12-10-2018',
      'Запланировано'
    ),
    new Task('8',
      'Название 7',
      'Категория 3',
      '09:45 12-10-2018',
      '11:45 12-10-2018',
      'Выполнено'
    )
  ];

  public size() {
    return this._tasks.length;
  }

  getByStatus(status: string) {
    return this._tasks.filter(task => task.status === status).length;
  }

  add(task: Task) {
    this._tasks.push(task)
  }

  edit(task: Task, indexArray: number) {
    //console.log('До обновления' + this.tasks[this.indexArray].category);
    this._tasks[indexArray] = task;
    //console.log('После обновления' + this.tasks[this.indexArray].category);
  }

  public delete(name: string) {
    var index = -1;
    index = this._tasks.findIndex((t) => t.name === name);
    if (index > -1) {
      this._tasks.splice(index, 1);
    }
    return true;
  }

  public getTasks() {
    return this._tasks;
  }

}
