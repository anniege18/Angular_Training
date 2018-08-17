import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolToStr'
})
export class BoolToStrPipe implements PipeTransform {

  transform(value: any, arg1?: any, arg2?: any): any {
    if (typeof value === 'boolean') {
      return value ?
        ( arg1 || 'yes' ) :
        ( arg2 || 'no' );
    }
    return value;
  }
}
