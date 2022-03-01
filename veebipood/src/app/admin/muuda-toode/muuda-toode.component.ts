import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {

  tooteMuutmiseVorm!: FormGroup;
  private tooted!: any[];
  private tooteId!: any;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    const tooteNimi = window.location.href.split("muuda/")[1]
    console.log(tooteNimi);
    
    this.http.get<any>(
      "https://veebipood-hans-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
      .subscribe(tagastus => {
        const uusMassiiv = [];
        for (const key in tagastus) {
          uusMassiiv.push(tagastus[key]);
        }
        this.tooted = uusMassiiv;
        const toode = this.tooted.find(element =>
          element.nimi.toLowerCase().replace(' ', '-').replace('õ', 'o') === tooteNimi)

          this.tooteId = this.tooted.indexOf(toode);

          this.tooteMuutmiseVorm = new FormGroup({
           nimi: new FormControl(toode.nimi),
           hind: new FormControl(toode.hind),
           aktiivne: new FormControl(toode.aktiivne)
         })
      });


    // const tootedLocalStoragest = localStorage.getItem("tooted");
    // if (tootedLocalStoragest) {
    //   tooted = JSON.parse(tootedLocalStoragest)
    // }


      
    
  }

  onMuuda() {
    this.tooted[this.tooteId] = this.tooteMuutmiseVorm.value;
    this.http.put("https://veebipood-hans-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
            this.tooted).subscribe();
  }

}