import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-vastus',
  templateUrl: './vastus.component.html',
  styleUrls: ['./vastus.component.css']
})
export class VastusComponent implements OnInit {
  answer: number = 0;

  constructor(private calculation: CalculationService) { }

  ngOnInit(): void {
    // this.answer = this.calculation.answerFromService
    this.calculation.answerChanged.subscribe(newAnswer => {
      this.answer = newAnswer
    })
  }

}
