import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  kahendV22rtus = true; //boolean
  kahendV22rtusKaks = false; //boolean

  tooted = [
  
    {nimi:'Coca-cola', hind: 1, aktiivne: true},
    {nimi:'Fanta', hind: 1.5, aktiivne: true},
    {nimi:'Sprite', hind: 2, aktiivne: true},
    {nimi:'Vishy', hind: 0.5, aktiivne: true},
    {nimi:'Vitamin well', hind: 2.5, aktiivne: true}
    ];

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

  onLisaOstukorvi(toode: any) {
    const sessionStorageOstukorv = sessionStorage.getItem("ostukorv");

    if (sessionStorageOstukorv) {
      const ostukorviTooted = JSON.parse(sessionStorageOstukorv);
      ostukorviTooted.push(toode);
      sessionStorage.setItem("ostukorv", JSON.stringify(ostukorviTooted))
      
    } else { 
      sessionStorage.setItem("ostukorv", JSON.stringify([toode]));
    }

  }

}
