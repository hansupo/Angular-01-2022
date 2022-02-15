import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  kahendV22rtus = true; //boolean
  kahendV22rtusKaks = false; //boolean

  tooted: any[] = [
    // {nimi:'Coca-cola', hind: 1, aktiivne: true},
    // {nimi:'Fanta', hind: 1.5, aktiivne: true},
    // {nimi:'Sprite', hind: 2, aktiivne: true},
    // {nimi:'Vishy', hind: 0.5, aktiivne: true},
    // {nimi:'Vitamin well', hind: 2.5, aktiivne: true}
    ];

  //string
  s6nalineMuutuja = "Ostukorvis tooteid:";

  //number
  numbrilineMuutuja = 1;

  constructor(private http: HttpClient) {
    console.log("kui component ehitatakse valmis, siis pannakse esiemene konstruktor käima");
    console.log("konstruktri sisse pannakse ühendusi erinevate failidega");
    
  }

  ngOnInit(): void {
    console.log("avaleht käivitub");
    console.log("enne htmli käimaminekut");
    // const tootedLocalStoragest = localStorage.getItem("tooted");
    // if (tootedLocalStoragest) {
    //   this.tooted = JSON.parse(tootedLocalStoragest)
    //   console.log(this.tooted);
      
    // }

    this.http.get<any>(
      "https://veebipood-hans-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
      .subscribe(tagastus => {
        console.log(tagastus);
        const uusMassiiv = [];
        for (const key in tagastus) {
          uusMassiiv.push(tagastus[key]);
        }
        this.tooted = uusMassiiv;
        
      });

      
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
