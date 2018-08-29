import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  visible: boolean = false;

  tasks = [
    {
      name: 'Название 1',
      category: 'Категория 1',
      dateStart: '18:15 08-10-2018',
      dateEnd: '20:15 08-10-2018',
      status: 'Выполнено'
    },
    {
      name: 'Название 2',
      category: 'Категория 2',
      dateStart: '18:15 08-10-2018',
      dateEnd: '20:15 08-10-2018',
      status: 'Выполнено'
    },
    {
      name: 'Название 5',
      category: 'Категория 2',
      dateStart: '18:15 08-10-2018',
      dateEnd: '20:15 08-10-2018',
      status: 'Выполнено'
    },
    {
      name: 'Название 3',
      category: 'Категория 2',
      dateStart: '19:15 08-10-2018',
      dateEnd: '12:15 09-10-2018',
      status: 'Просрочено'
    },
    {
      name: 'Название 5',
      category: 'Категория 3',
      dateStart: '11:15 08-10-2018',
      dateEnd: '12:15 12-10-2018',
      status: 'Запланировано'
    },
    {
      name: 'Название 4',
      category: 'Категория 2',
      dateStart: '19:15 08-10-2018',
      dateEnd: '12:15 09-10-2018',
      status: 'Просрочено'
    },
    {
      name: 'Название 6',
      category: 'Категория 3',
      dateStart: '11:15 08-10-2018',
      dateEnd: '12:15 12-10-2018',
      status: 'Запланировано'
    },
    {
      name: 'Название 7',
      category: 'Категория 3',
      dateStart: '09:45 12-10-2018',
      dateEnd: '11:45 12-10-2018',
      status: 'Выполнено'
    }
  ];

  deleteTaskFromArray(name: string) {
    var index = -1;
    console.log('Задача' + name + 'удалена');
    index = this.tasks.findIndex((t) => t.name === name);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    return true;
  }

  getTaskListsSize() {
    return this.tasks.length;
  }

  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(task => task.status === status).length;
  }

  addTask() {
    console.log('Задача создана');
  }

  filterTasks($event) {
    //this.tasks.filter(task => task.status === status)
    //console.log($event.target.checked);
    this.visible = $event.target.checked;
  }

  constructor() { }

  ngOnInit() {
  }

}
