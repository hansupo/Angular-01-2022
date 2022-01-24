import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numbrilineMuutuja = 1;
  ekstraToode = 1;
  ostukorviLisaja = false;
  toode1 = "Coca-cola";
  toode2 = "Fanta";
  toode3 = "Sprite";
  toode4 = "Vishy";
  toode5 = "Vitamin Well";
  ostukorviProdukt = "";
  ostukorviKoht1 = false;
  ostukorviKoht2 = false;
  ostukorviKoht3 = false;
  ostukorviKoht4 = false;
  ostukorviKoht5 = false;
  ostukorviKoht6 = false;
  korvikohtVaba = true;

  onOstukorvilisatud() {

  }

  onToode1() {
    console.log("coca-cola ostukorvi lisatud");

if (this.ostukorviKoht1=false,this.korvikohtVaba=true) {
      this.ostukorviKoht1 = true;
      this.korvikohtVaba = false;
      this.ostukorviProdukt = "Coca-cola"
      this.ostukorviLisaja = true;
} else {
      this.ostukorviKoht2 = true;
      this.korvikohtVaba = false;
      this.ostukorviProdukt = "Coca-cola"
      this.ostukorviLisaja = true;
}

  }

  onToode2() {
    console.log("fanta ostukorvi lisatud");
if (this.ostukorviKoht1=false,this.korvikohtVaba=true) {
      this.ostukorviKoht1 = true;
      this.korvikohtVaba = false;
      this.ostukorviProdukt = "Fanta"
      this.ostukorviLisaja = true;
} else {
      this.ostukorviKoht1 = true;
      this.korvikohtVaba = false;
      this.ostukorviProdukt = "Fanta"
      this.ostukorviLisaja = true;
    }

  }

  onToode3() {
    console.log("sprite ostukorvi lisatud");
    this.ostukorviLisaja = true;
    this.ostukorviProdukt = "Sprite"
  }

  onToode4() {
    console.log("vishy ostukorvi lisatud");
    this.ostukorviLisaja = true;
    this.ostukorviProdukt = "Vishy"
  }

  onToode5() {
    console.log("vitaminwell ostukorvi lisatud");
    this.ostukorviLisaja = true;
    this.ostukorviProdukt = "Vitamin Well"
  }

  onToode6() {
    
  }

  onLisaToode() {
    console.log("ostukorvi lisamise funktsioon töötab");
    this.numbrilineMuutuja = this.numbrilineMuutuja + 1
  }

  onEemaldaToode() {
    console.log("ostukorvi eemaldamise funktsioon töötab");
    this.numbrilineMuutuja = this.numbrilineMuutuja - this.ekstraToode
    if (this.numbrilineMuutuja < 1) {
      this.numbrilineMuutuja = 0
    }
  }

}
