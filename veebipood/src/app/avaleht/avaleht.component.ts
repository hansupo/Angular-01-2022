import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  kahendV22rtus = true; //boolean
  kahendV22rtusKaks = false; //boolean

  //string
  s6nalineMuutuja = "Ostukorvis tooteid:";

  //number
  numbrilineMuutuja = 1;

  constructor() {
    console.log("kui component ehitatakse valmis, siis pannakse esiemene konstruktor käima");
    console.log("konstruktri sisse pannakse ühendusi erinevate failidega");
    
  }

  ngOnInit(): void {
    console.log("avaleht käivitub");
    console.log("enne htmli käimaminekut");
  }

  onLisaOstukorvi() {
    console.log("ostukorvi lisamise funktsioon töötab");
    this.kahendV22rtus = !this.kahendV22rtus;
    this.kahendV22rtusKaks = !this.kahendV22rtusKaks;
    this.numbrilineMuutuja = 1;
  }

}
