import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  // toodeNimi = "Coca cola";
  // toodeHind = 1;
  // toodeAktiivne = false;
  // // JSON objekt
  // toode1 = {nimi: "Coca-cola", hind: 1, aktiivne: false};

  // toodeNimi2 = "Fanta";
  // toodeHind2 = 1.5;
  // toodeAktiivne2 = true;

tooted = [
  
    {nimi:'Coca-cola', hind: 1, aktiivne: true},
    {nimi:'Fanta', hind: 1.5, aktiivne: true},
    {nimi:'Sprite', hind: 2, aktiivne: true},
    {nimi:'Vishy', hind: 0.5, aktiivne: true},
    {nimi:'Vitamin well', hind: 2.5, aktiivne: true}
    ];

ostukorviSumma = 0

  // JSON kuju --uuri ise

  constructor() {
    console.log("construktor läheb käima");
  }

  ngOnInit(): void {
    console.log("mindi ostukorv component lehele");
    this.arvutaOstukorviSumma();
  }

  onTyjendaOstukorv() {
    this.tooted = [];
    this.arvutaOstukorviSumma();
  }

  onEemaldaOstukorvist(toode: any) {
    console.log("ostukorvist eemaldatud");
    console.log(toode);
    const j2rjekorraNumber = this.tooted.indexOf(toode);
    console.log(j2rjekorraNumber);
    console.log(this.tooted);
    this.tooted.splice(j2rjekorraNumber, 1)
    console.log(this.tooted);
    this.arvutaOstukorviSumma();
    
  }

  onLisaOstuKorvi(toode: any) {
    console.log("ostukorvi lisatud")
    console.log(toode);
    console.log(this.tooted);
    this.tooted.push(toode);
    console.log(this.tooted);
    this.arvutaOstukorviSumma();
    
  }

  private arvutaOstukorviSumma() {
    this.ostukorviSumma = 0;
    this.tooted.forEach(element => this.ostukorviSumma = this.ostukorviSumma + element.hind );
    console.log(this.ostukorviSumma);
  }

}
