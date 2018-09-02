import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase',
  pure: true
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value: string) {
/*    var result = '';
    var pattern = new RegExp("\b\p{Lu}(\p{Ll}*)\b");
    console.log(pattern.exec(value));
/!*    value.replace(/b/p{Lu}(/p{Ll}*)/b);
                  /[^ -:0-9]+/g*!/
    /!*array.forEach(s => {
      result += s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase() + ' ';
    })*!/

    var result = value.replace("\b\p{Lu}(\p{Ll}*)\b","");
    /!*value.split(pattern);*!/*/

    return value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  }
}
