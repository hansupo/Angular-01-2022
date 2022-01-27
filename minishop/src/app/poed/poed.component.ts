import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {

  shops = [
    {location: "Narva mnt 7", time: "9-17"},
    {location: "Toompuiestee 8", time: "10-17"},
    {location: "Liivalaia 15", time: "9-18"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
