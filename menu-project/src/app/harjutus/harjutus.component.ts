import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harjutus',
  templateUrl: './harjutus.component.html',
  styleUrls: ['./harjutus.component.css']
})
export class HarjutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  n2itaKollast = false;
  n2itaRohelist = false;
  n2itaSinist = false;
  n2itaPunast = false;

  onKlikkimisel() {
    this.n2itaKollast = !this.n2itaKollast;
    console.log(this.n2itaKollast);
    
  }

  onHiiregaPealeMinekul() {
    this.n2itaRohelist = true;
    console.log(this.n2itaRohelist);
    
  }

  onHiirega2raMinekul () {
    this.n2itaRohelist = false;
    console.log(this.n2itaRohelist);
    
  }

  hiiregaV2ljaKl6psates() {
    this.n2itaPunast = true;
    console.log(this.n2itaPunast);
    setInterval(() => {
      this.n2itaPunast = false;
      console.log(this.n2itaPunast);
      
    }, 2000);
  }

  klaviatuuriVajutades() {
    window.alert("Vajutasid klaviatuuril!")
  }

}
