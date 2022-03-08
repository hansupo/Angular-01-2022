import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any[] | Product[], mapKey: string): string[] {
    const newArray = value.map(element => element[mapKey])
    return newArray.filter((element, index, values) => values.indexOf(element) === index);
  }

}
