import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value);
    return value.substring(0,1).toUpperCase()+value.substring(1);
  }
}
