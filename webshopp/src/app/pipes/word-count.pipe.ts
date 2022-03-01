import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount'
})
export class WordCountPipe implements PipeTransform {

  transform(value: string, wordCount: number): any {
    return value.split(" ").slice(0,wordCount).join(" ");
  }

}
