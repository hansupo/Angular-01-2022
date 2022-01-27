import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tooted = [
    {nimi:'Coca-cola', hind: 1, aktiivne: true, kogus: 1},
    {nimi:'Fanta', hind: 1.5, aktiivne: true, kogus: 1},
    {nimi:'Sprite', hind: 2, aktiivne: true, kogus: 1},
    {nimi:'Vishy', hind: 0.5, aktiivne: true, kogus: 1},
    {nimi:'Vitamin well', hind: 2.5, aktiivne: true, kogus: 1}
  ]

  displayTooted() {
    
  }

}
