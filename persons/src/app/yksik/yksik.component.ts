import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yksik',
  templateUrl: './yksik.component.html',
  styleUrls: ['./yksik.component.css']
})
export class YksikComponent implements OnInit {

  constructor(private http:HttpClient) { }

  inimene!: any;

  ngOnInit(): void {
    const inimeseNimi = window.location.href.split("inimene/")[1]
    console.log(inimeseNimi);

    let inimesed = [
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
    
    const inimesedLocalStoragest = localStorage.getItem("inimesed");
    if (inimesedLocalStoragest) {
      inimesed = JSON.parse(inimesedLocalStoragest);
    }

    this.inimene = inimesed.find(element =>
      element.name.toLowerCase().replace(' ','-') === inimeseNimi)

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

}
