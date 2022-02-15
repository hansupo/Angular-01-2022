import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onLisa(vorm: any) {
    console.log(vorm);
    if (vorm.valid) {
      console.log(vorm.value);
        if (vorm.value.aktiivne === '') {
          vorm.value.aktiivne = false;
        }
        // const tootedLocalStoragest = localStorage.getItem("tooted")
        // if (tootedLocalStoragest) {
        //   const tooted = JSON.parse(tootedLocalStoragest);
        //   tooted.push(vorm.value);
        //   localStorage.setItem("tooted", JSON.stringify(tooted));
          
        // } else {
        //   localStorage.setItem("tooted", JSON.stringify([vorm.value]));
        // }
        this.http.post("https://veebipood-hans-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
            vorm.value).subscribe();


    }
    
  }

}
