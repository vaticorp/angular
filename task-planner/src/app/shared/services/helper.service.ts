import * as moment from 'moment';
import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  public beautifyDate(date: string, srcFormat: string, destFormat: string): string {
    return moment(date, srcFormat).format(destFormat).toString();
  }
}
