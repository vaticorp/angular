import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task.model';
import { DeleteService } from '../../shared/services/delete.service';
import { Router } from '@angular/router';
import { EditService } from '../../shared/services/edit.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  visible: boolean = false;
  indexArray: number;
  private _edit: Task;

  tasks: Task[] = [
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

  deleteTaskFromArray(name: string) {
    var index = -1;
    index = this.tasks.findIndex((t) => t.name === name);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    return true;
  }

  editTask(editTask: Task, index:number) {
    this.indexArray = index;
    this._edit = {...editTask};
    this.router.navigate(['tasks', editTask.id], {queryParams: {name: this._edit.name,
                                                                                 category: this._edit.category,
                                                                                 dateStart: this._edit.dateStart,
                                                                                 dateEnd: this._edit.dateEnd,
                                                                                 id: this._edit.id,
                                                                                 status: this._edit.status}})
  }

  saveEdit(task: Task) {
    console.log('До обновления' + this.tasks[this.indexArray].category);
    this.tasks[this.indexArray] = task;
    console.log('После обновления' + this.tasks[this.indexArray].category);
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

  constructor(private deleteService: DeleteService,private editService: EditService,private router: Router,private authService: AuthService) {
  }

  ngOnInit() {
    this.deleteService.dataUpdate$.subscribe((data: string) => {
      this.deleteTaskFromArray(data);
    });

    this.editService.dataUpdate$.subscribe((data: Task) => {
      this.saveEdit(data)
    });
  }
}
