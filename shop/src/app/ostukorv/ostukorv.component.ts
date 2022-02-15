import { HttpClient, HttpHeaders } from '@angular/common/http';
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

tooted: any[] = [];

ostukorviSumma = 0

  // JSON kuju --uuri ise

  constructor(private http: HttpClient) {
    console.log("construktor läheb käima");
  }

  ngOnInit(): void {
    const ostukorviTooted = sessionStorage.getItem("ostukorv");
    if (ostukorviTooted) {
      this.tooted = JSON.parse(ostukorviTooted);
    }
    this.arvutaOstukorviSumma();
  }

  onTyjendaOstukorv() {
    this.tooted = [];
    sessionStorage.setItem("ostukorv", JSON.stringify(this.tooted));
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
    sessionStorage.setItem("ostukorv", JSON.stringify(this.tooted));
    this.arvutaOstukorviSumma();
    
  }

  onLisaOstukorvi(toode: any) {

    this.tooted.push(toode);
    sessionStorage.setItem("ostukorv", JSON.stringify(this.tooted));
    this.arvutaOstukorviSumma();
    
  }

  private arvutaOstukorviSumma() {
    this.ostukorviSumma = 0;
    this.tooted.forEach(element => this.ostukorviSumma = this.ostukorviSumma + element.hind );
    console.log(this.ostukorviSumma);
  }

  mineMaksma() {
    const makseAndmed = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": this.ostukorviSumma,
      "order_reference": Math.floor(Math.random() * 8999999 + 100000),
      "nonce": "92ddcfab96e34a5f" + Math.floor(Math.random() * 8999999 + 100000) + new Date() ,
      "timestamp": new Date(),
      "customer_url": "https://www.delfi.ee"
    }
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";

    // let headers = new HttpHeaders();
    // headers.set("Authorization", "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==");

    this.http.post<any>(
      url,
      makseAndmed,
      {headers:
        new HttpHeaders(
          {
            'Authorization': 
            'Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=='
          }
        )
      }
    ).subscribe(response => window.location.href = response.payment_link );
     
  }
}
