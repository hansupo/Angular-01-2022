import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-jagamine',
  templateUrl: './jagamine.component.html',
  styleUrls: ['./jagamine.component.css']
})
export class JagamineComponent implements OnInit {

  constructor(private calculation: CalculationService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.calculation.answerFromService /= form.value.divide
    this.calculation.answerChanged.next(this.calculation.answerFromService)
      // private calculation: CalculationService
  }

}
