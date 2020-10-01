import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any, args?: number): any {
    if(value){
      let res = value.trim();
      const MAX = 30;
      if (!args) { args = MAX; }
      if (value.length > args) {
        res = value.substring(0, args);
      }
      return res + '...';

    }
  }

}
