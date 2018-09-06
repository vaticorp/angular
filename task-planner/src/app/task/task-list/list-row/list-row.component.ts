import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelperService } from '../../../shared/services/helper.service';
import { DeleteService } from '../../../shared/services/delete.service'


@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

  @Input() name;
  @Input() category;
  @Input() dateStart;
  @Input() dateEnd;
  @Input() status;

  //@Output() deleteTaskEmitter = new EventEmitter<string>();

  deleteTask() {
    this.deleteService.updateDate(this.name);
    //this.deleteTaskEmitter.emit(this.name);
  }

  getFormatDate(date: string) {
    return this.helperService.beautifyDate(date,'YYYY-MM-DD','DD MMMM YY')
  }

  constructor(private helperService: HelperService, private deleteService: DeleteService) {
  }

  ngOnInit() {
  }
}
