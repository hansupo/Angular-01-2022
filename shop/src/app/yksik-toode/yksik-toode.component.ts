import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yksik-toode',
  templateUrl: './yksik-toode.component.html',
  styleUrls: ['./yksik-toode.component.css']
})
export class YksikToodeComponent implements OnInit {

  constructor() { }




    toode!: any;

  ngOnInit(): void {
    console.log(window.location.href.split("toode/")[1]);
    const tooteNimi = window.location.href.split("toode/")[1]
    
    let tooted = [
      {nimi:'Coca-cola', hind: 1, aktiivne: true},
      {nimi:'Fanta', hind: 1.5, aktiivne: true},
      {nimi:'Sprite', hind: 2, aktiivne: true},
      {nimi:'Vishy', hind: 0.5, aktiivne: true},
      {nimi:'Vitamin well', hind: 2.5, aktiivne: true}
      ];

    const tootedLocalStoragest = localStorage.getItem("tooted");
    if (tootedLocalStoragest) {
      tooted = JSON.parse(tootedLocalStoragest)
    }

    this.toode = tooted.find(element =>
       element.nimi.toLowerCase().replace(' ', '-') === tooteNimi)
    console.log(this.toode);
    
    
  }

}
