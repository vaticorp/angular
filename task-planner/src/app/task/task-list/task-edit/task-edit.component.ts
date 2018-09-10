import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { HelperService } from '../../../shared/services/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task.model';
import { EditService } from '../../../shared/services/edit.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit, OnDestroy, OnChanges {

 @Input() edit;

  constructor(private helperService: HelperService,
              private editService: EditService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  cancel() {
    this.router.navigate(['../']);
  }

  saveTask() {
    console.log(this.edit)
    this.editService.updateDate(this.edit);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnInit() {
    let queryPar = this.route.snapshot.queryParamMap;
    this.edit = new Task(queryPar.get('id'), queryPar.get('name'), queryPar.get('category'), queryPar.get('dateStart'), queryPar.get('dateEnd'), queryPar.get('status'));
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
