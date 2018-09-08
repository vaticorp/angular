import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';
import { Task } from '../../task/task-list/task.model';

@Injectable()
export class EditService {
  private dataSource = new Subject<Task>();
  dataUpdate$ = this.dataSource.asObservable();
  updateDate(data: Task) {
    this.dataSource.next(data);
  }
}
