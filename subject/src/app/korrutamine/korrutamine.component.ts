import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-korrutamine',
  templateUrl: './korrutamine.component.html',
  styleUrls: ['./korrutamine.component.css']
})
export class KorrutamineComponent implements OnInit {

  constructor(private calculation: CalculationService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.calculation.answerFromService *= form.value.multiply
    this.calculation.answerChanged.next(this.calculation.answerFromService)
      // private calculation: CalculationService
  }

}
