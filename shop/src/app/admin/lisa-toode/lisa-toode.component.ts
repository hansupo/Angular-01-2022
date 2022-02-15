import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
  }

  onLisa(vorm: any) {
    console.log(vorm);
    if (vorm.valid) {
      console.log(vorm.value);
        if (vorm.value.aktiivne === '') {
          vorm.value.aktiivne = false;
        }
        this.http.post("https://shop-e6f76-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
            vorm.value).subscribe(tagastus =>{
              this.router.navigateByUrl('/admin')
            });

    }

  }

}
