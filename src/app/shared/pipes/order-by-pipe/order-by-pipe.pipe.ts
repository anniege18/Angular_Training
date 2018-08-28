import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe',
  pure: false
})
export class OrderByPipePipe implements PipeTransform {

  transform(arr: any[], field: string, reverse: boolean): any[] {

    if (!arr) return;
    const reverseFlag = typeof reverse === 'undefined' ? false : reverse;

    const sortFunc = (a,b) => {
      if (!(field in a && field in b)) return 0;

      const res = reverseFlag ? -1 : 1;
      if (a[field] > b[field])
        return res;
      if (a[field] < b[field])
        return -res;
      return 0;
    };

    return arr.sort(sortFunc);
  }
}
