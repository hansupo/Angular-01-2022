import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {

  tooted: any[] = [];

  constructor(private router: Router, private http: HttpClient) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
   }

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

  onKustutaToode(kustutatavToode: any) {
    const j2rjekorraNumber = this.tooted.indexOf(kustutatavToode);
    this.tooted.splice(j2rjekorraNumber, 1)
    this.http.put("https://shop-e6f76-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
    this.tooted).subscribe(tagastus => {
      this.router.navigateByUrl('/admin')
    });


  }

}
