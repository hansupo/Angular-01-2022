import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inimesed',
  templateUrl: './inimesed.component.html',
  styleUrls: ['./inimesed.component.css']
})
export class InimesedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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


}
