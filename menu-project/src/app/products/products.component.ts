import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
    {nimi:'Vitamin-well-done', hind: 50, aktiivne: true, kogus: 0},
    {nimi:'Dr. Pepper', hind: 1.99, aktiivne: true, kogus: 0},
    {nimi:'Mountain-Dew', hind: 1.69, aktiivne: true, kogus: 0},
    {nimi:'Vesi', hind: 1.79, aktiivne: true, kogus: 0},
    {nimi:'Piim', hind: 1.19, aktiivne: true, kogus: 0},
    {nimi:'Keefir', hind: 2.99, aktiivne: true, kogus: 0},
    {nimi:'Saku Kuld', hind: 2.19, aktiivne: true, kogus: 0},
    {nimi:'Gin toonik', hind: 1.99, aktiivne: true, kogus: 0},
    {nimi:'Punane vein', hind: 1.99, aktiivne: true, kogus: 0},
    {nimi:'Valge vein', hind: 1.29, aktiivne: true, kogus: 0},
    {nimi:'Kombucha', hind: 50, aktiivne: true, kogus: 0}
  ]

  ostukorv = [{nimi:'Placeholder', hind: 0, aktiivne: false, kogus: 0}];
  check = false
  kogusOstukorvis = 0
  ostukorviSumma = 0
  hind = [0]
  hindKokku = 0
  toodetekogus = 0

  onToodeKorvi(toode: any) {
    this.check = this.ostukorv.includes(toode)
    if (!this.check) {
      this.ostukorv.splice(0, 0, toode)
      toode.kogus = 0
    }
    toode.kogus = toode.kogus + 1
    // this.arvutaOstukorviSumma();
    // this.onArvutaToodeteKogus()
  }

}
