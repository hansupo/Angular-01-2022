import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  toodeNimi = "Coca cola";
  toodeHind = 1;
  toodeAktiivne = false;

  toodeNimi2 = "Fanta";
  toodeHind2 = 1.5;
  toodeAktiivne2 = true;

  // JSON kuju --uuri ise

  constructor() {
    console.log("construktor läheb käima");
  }

  ngOnInit(): void {
    console.log("mindi ostukorv component lehele");
  }

  onEemaldaOstukorvist() {
    console.log("ostukorvist eemaldatud");
  }
}
