import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(number: number, multiplication: number): number {
    return number*multiplication;
  }

}
