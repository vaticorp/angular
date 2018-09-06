import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase',
  pure: true
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value: string) {
    let array = value.split(' ');
    var result = '';
    array.forEach(s => {
      result += s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase() + ' ';
    })
    return result;
  }
}
