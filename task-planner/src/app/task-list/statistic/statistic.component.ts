import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from '../../shared/services/helper.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css'],
  providers: [HelperService]
})
export class StatisticComponent implements OnInit {

  @Input() tasksAll;
  @Input() tasksPlanned;
  @Input() tasksOverdue;
  @Input() tasksFinish;

  constructor(private helperService: HelperService) { }

  ngOnInit() {
  }

}
