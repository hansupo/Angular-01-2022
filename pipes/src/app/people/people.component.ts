import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  nimiKasvav = true;
  vanusKasvav = true;
  searchedItem :string = "";
  private originalPeople: any[] = [];

  people = [
    {name: "malle", age: 1962, countrycode: 'EE'},
    {name: "gustav", age: 1932, countrycode: 'SE'},
    {name: "robert", age: 1992, countrycode: 'GB'},
    {name: "anna", age: 1987, countrycode: 'RU'},
    {name: "matti", age: 1978, countrycode: 'FI'},
    {name: "dirk", age: 1998, countrycode: 'DE'},
    {name: "toomas", age: 1950, countrycode: 'EE'},
    {name: "thomas", age: 1966, countrycode: 'GB'}
  ]

  constructor() { }

  ngOnInit(): void {
    this.originalPeople = this.people
  }

  // onSearch() {
  //   this.people.forEach((human, i) => {
  //     let humanDiv = document.getElementsByClassName("human")[i] as HTMLElement
  //     if (human.name.toUpperCase().indexOf(this.searchedItem.toUpperCase()) > -1) {
  //       humanDiv.style.display = "";
  //     } else {
  //       humanDiv.style.display = "none"
  //     }
  //   });
  // }


  onSearchPeople() {
    this.people = this.originalPeople.filter(element => 
      element.name.toLowerCase().indexOf(this.searchedItem.toLowerCase()) > -1 ||
      element.age.toString().indexOf(this.searchedItem) > -1 ||
      element.countrycode.toLowerCase().indexOf(this.searchedItem.toLowerCase()) > -1
      )
  }

}
