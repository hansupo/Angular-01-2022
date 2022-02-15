import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {

  tooted: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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

  onKustutaToode(kustutatavToode: any) {
    const j2rjekorraNumber = this.tooted.indexOf(kustutatavToode);
    this.tooted.splice(j2rjekorraNumber, 1)
    // localStorage.setItem("tooted", JSON.stringify(this.tooted));
    this.http.put("https://veebipood-hans-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
            this.tooted).subscribe();

    
  }

}
