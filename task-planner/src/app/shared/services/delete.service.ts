import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';
import { Task } from '../../task-list/task.model';

@Injectable()
export class DeleteService {
  private dataSource = new Subject<String>();
  dataUpdate$ = this.dataSource.asObservable();
  updateDate(data: String) {
    this.dataSource.next(data);
  }
}
