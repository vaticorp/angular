import * as moment from 'moment';

export class HelperService {

  public beautifyDate(date: string, srcFormat: string, destFormat: string): string {
    return moment(date, srcFormat).format(destFormat).toString();
  }
}
