import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any[]): any[] {
    const newArray = value.map(element => element.A1_NAME)
    return newArray.filter((element, index, values) => values.indexOf(element) === index);
  }

}
