import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  answerFromService: number = 0;
  answerChanged = new Subject<number>();

  constructor() { }
}
