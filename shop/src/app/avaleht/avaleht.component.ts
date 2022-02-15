import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {


  tooted: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(
      "https://shop-e6f76-default-rtdb.europe-west1.firebasedatabase.app/tooted.json"
    )
      .subscribe(tagastus => {
        const uusMassiiv = [];
        for (const key in tagastus) {
          uusMassiiv.push(tagastus[key]);
        }
        this.tooted = uusMassiiv
      }
    )
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
