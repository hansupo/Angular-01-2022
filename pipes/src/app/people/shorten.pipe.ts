import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(name: string, limited: number): string {
    return name.substring(0,limited);
  }

}
