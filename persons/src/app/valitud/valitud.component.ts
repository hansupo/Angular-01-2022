import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-valitud',
  templateUrl: './valitud.component.html',
  styleUrls: ['./valitud.component.css']
})
export class ValitudComponent implements OnInit {

  constructor(private http:HttpClient, private translate: TranslateService) { }

  ngOnInit(): void {
    this.onArvutaStatistika ();

    const inimesedLocalStoragest = localStorage.getItem("inimesed")
    if (inimesedLocalStoragest) {
      this.inimesed = JSON.parse(inimesedLocalStoragest)
    }
  }

  inimesed = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
      ,kasutajavanus: Math.floor(Math.random() * 42) + 18
      },
      {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
      ,kasutajavanus: Math.floor(Math.random() * 42) + 18
      },
      {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net"
      ,kasutajavanus: Math.floor(Math.random() * 42) + 18
      },
      {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org"
      ,kasutajavanus: Math.floor(Math.random() * 42) + 18
      },
      {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca"
      ,kasutajavanus: Math.floor(Math.random() * 42) + 18
      },
      {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info"
      ,kasutajavanus: Math.floor(Math.random() * 42) + 18
      },
      {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz"
      ,kasutajavanus: Math.floor(Math.random() * 42) + 18
      },
      {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me"
      ,kasutajavanus: Math.floor(Math.random() * 42) + 18
      },
      {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io"
      ,kasutajavanus: Math.floor(Math.random() * 42) + 18
      },
      {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz"
      ,kasutajavanus: Math.floor(Math.random() * 42) + 18
      }
  ]

  vanusKokku = 0
  inimesiKokku = 0
  keskmineVanus = 0

  uusVormAktiivne = false


  onLisaValitu (inimene: any) {
    this.inimesed.push(inimene);
    this.onArvutaStatistika ();
    console.log(inimene);
    
  }

  onEemaldaValitu (inimene: any) {
    const j2rjekorraNumber = this.inimesed.indexOf(inimene);
    this.inimesed.splice(j2rjekorraNumber, 1);
    this.onArvutaStatistika ();
  }

  onTyhjendaValitud () {
    this.inimesed = [];
    this.onArvutaStatistika ();
    this.uusVormAktiivne = false
  }

  onArvutaStatistika () {
    this.vanusKokku = 0
    this.inimesiKokku = 0
    this.keskmineVanus = 0
    this.inimesed.forEach(element => this.vanusKokku = this.vanusKokku + element.kasutajavanus);
    this.inimesiKokku = this.inimesed.length; 
    this.keskmineVanus = this.vanusKokku / this.inimesiKokku
    this.keskmineVanus = Math.round(this.keskmineVanus * 10) / 10; 
  }

  onLisa(vorm: any) {
    if (vorm.valid) {
      this.inimesed.push(vorm.value)
      if (vorm.value.aktiivne === '') {
        vorm.value.aktiivne = false;
      }

      const inimesedLocalStoragest = localStorage.getItem("inimesed");
      if (inimesedLocalStoragest) {
        const inimesed = JSON.parse(inimesedLocalStoragest);
        inimesed.push(vorm.value);
        localStorage.setItem("inimesed", JSON.stringify(inimesed));
      }
      else {
        localStorage.setItem("inimesed", JSON.stringify([vorm.value]))
      }
      
      this.onArvutaStatistika ();
      this.uusVormAktiivne = false
    }
    else {
      this.uusVormAktiivne = false
    }
  }

  onLisaUus () {
    this.uusVormAktiivne = true
  }

  onOstaInimene (inimene: any) {
    let inimeseHind = inimene.kasutajavanus * 10
    console.log(inimeseHind);

    const makseAndmed = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": inimeseHind,
      "order_reference": Math.floor(Math.random() * 8999999 + 100000),
      "nonce": "92ddcfab96e34a5f" + Math.floor(Math.random() * 8999999 + 100000) + new Date() ,
      "timestamp": new Date(),
      "customer_url": "https://www.delfi.ee"
    }

    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff"

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
    ).subscribe(response => window.location.href = response.payment_link);
    
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }


}
