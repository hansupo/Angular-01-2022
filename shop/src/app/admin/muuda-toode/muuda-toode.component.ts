import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {

  tooteMuutmiseVorm!: FormGroup;
  private tooted!: any[];
  private tooteId!: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const tooteNimi = window.location.href.split("muuda/")[1]
    console.log(tooteNimi);
    

    this.http.get<any>(
      "https://shop-e6f76-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
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
            pilt: new FormControl(toode.pilt),
            aktiivne: new FormControl(toode.aktiivne)
          })
      })
  }

  onMuuda() {
    this.tooted[this.tooteId] = this.tooteMuutmiseVorm.value;
    this.http.put("https://shop-e6f76-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
    this.tooted).subscribe(tagastus => {
      this.router.navigateByUrl('/admin')
    });
  }
}