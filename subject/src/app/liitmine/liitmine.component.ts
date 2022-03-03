import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-liitmine',
  templateUrl: './liitmine.component.html',
  styleUrls: ['./liitmine.component.css']
})
export class LiitmineComponent implements OnInit {

  constructor(private calculation: CalculationService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.calculation.answerFromService += form.value.add
    this.calculation.answerChanged.next(this.calculation.answerFromService)
  }

}
