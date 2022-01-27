import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.arvutaOstukorviSumma();
  }

  // Definitsioonid:

  tooted = [
    {nimi:'Coca-cola', hind: 1.99, aktiivne: true, kogus: 0},
    {nimi:'Fanta', hind: 1.69, aktiivne: true, kogus: 0},
    {nimi:'Sprite', hind: 1.79, aktiivne: true, kogus: 0},
    {nimi:'Vishy', hind: 1.19, aktiivne: true, kogus: 0},
    {nimi:'Vitamin well', hind: 2.99, aktiivne: true, kogus: 0},
    {nimi:'Coca-cola Zero', hind: 2.19, aktiivne: true, kogus: 0},
    {nimi:'Fanta Blue', hind: 1.99, aktiivne: true, kogus: 0},
    {nimi:'Sprite White', hind: 1.99, aktiivne: true, kogus: 0},
    {nimi:'Vishy mustika', hind: 1.29, aktiivne: true, kogus: 0},
    {nimi:'Vitamin-well-done', hind: 50, aktiivne: true, kogus: 0}
  ]

  ostukorv = [{nimi:'Placeholder', hind: 0, aktiivne: false, kogus: 0}];
  check = false
  kogusOstukorvis = 0
  ostukorviSumma = 0
  hind = [0]
  hindKokku = 0
  toodetekogus = 0

  // Funktsioonid:

  // Toode lisatakse ostukorvi 
  // a) kui toodet ei ole ostukorvis -> lisatakse uus kirje, kogus = 0 ja kogus + 1
  // b) kui toode juba on ostukorvis -> kogus + 1
  // c) arvutatakse ostukorvi summa

  onToodeKorvi(toode: any) {
    this.check = this.ostukorv.includes(toode)
    if (!this.check) {
      this.ostukorv.splice(0, 0, toode)
      toode.kogus = 0
    }
    toode.kogus = toode.kogus + 1
    this.arvutaOstukorviSumma();
    this.onArvutaToodeteKogus()
  }

  // Toode eemaldatakse ostukorvist 
  // a) kui kogus on 1 -> eemaldatakse toodekirje ostukorvist
  // b) kui kogus on 1+ -> kogus - 1
  // c) arvutatakse ostukorvi summa

  onEemaldaToodeKorvist(toode: any) {
    if (toode.kogus <= 1) {
      const j2rjekorraNumber = this.ostukorv.indexOf(toode);
      this.ostukorv.splice(j2rjekorraNumber, 1);
    } 
    toode.kogus = toode.kogus - 1
    this.arvutaOstukorviSumma();
    this.onArvutaToodeteKogus()
  }

  // Arvutatakse ostukorvi summa -> iga ostukorvi kirje kohta korrutatakse...
  // ...toote hind ja toote kogus ning liidetakse need
  private arvutaOstukorviSumma() {
    this.ostukorviSumma = 0;
    this.ostukorv.forEach(element => this.ostukorviSumma = this.ostukorviSumma + element.hind * element.kogus );
  }

  onTyhjendaOstukorv() {
    this.ostukorv = [{nimi:'Placeholder', hind: 0, aktiivne: false, kogus: 0}];
    this.ostukorviSumma = 0; 
    this.onArvutaToodeteKogus()
  }

  onArvutaToodeteKogus() {
    this.toodetekogus = 0
    this.ostukorv.forEach(element => this.toodetekogus = this.toodetekogus + element.kogus)
    console.log(this.toodetekogus);
    
  }
  


}




