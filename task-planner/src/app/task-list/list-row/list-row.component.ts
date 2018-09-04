import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelperService } from '../../shared/services/helper.service';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css'],
  providers: [HelperService]
})
export class ListRowComponent implements OnInit {

  @Input() name;
  @Input() category;
  @Input() dateStart;
  @Input() dateEnd;
  @Input() status;

  @Output() deleteTaskEmitter = new EventEmitter<string>();

  deleteTask() {
    this.deleteTaskEmitter.emit(this.name);
  }

  constructor(private helperService: HelperService) {

  }

  ngOnInit() {
  }

}
