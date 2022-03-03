import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-lahutamine',
  templateUrl: './lahutamine.component.html',
  styleUrls: ['./lahutamine.component.css']
})
export class LahutamineComponent implements OnInit {

  constructor(private calculation: CalculationService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.calculation.answerFromService -= form.value.subtract
    this.calculation.answerChanged.next(this.calculation.answerFromService)
      // private calculation: CalculationService
  }



}
