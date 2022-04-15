
import { Component, OnInit } from '@angular/core';
import { ParcelMachine } from 'src/app/models/parcel-machine.model';
import { ParcelMachineService } from './parcel-machine.service';

@Component({
  selector: 'app-parcel-machine',
  templateUrl: './parcel-machine.component.html',
  styleUrls: ['./parcel-machine.component.css']
})
export class ParcelMachineComponent implements OnInit {
  parcelMachines: ParcelMachine[] = [];
  originalparcelMachines: ParcelMachine[] = [];
  selectedCounty: string = "";
  selectedPMachine: string = "";

  constructor(private parcelMachineService: ParcelMachineService) { }

  ngOnInit(): void {
    this.parcelMachineService.getParcelMachines().subscribe(res => {
      this.originalparcelMachines = res.filter(element => element.A0_NAME === "EE");
      this.parcelMachines = this.originalparcelMachines
  })
  }

  showParcelMachinesByCounty() {
    this.parcelMachines = this.originalparcelMachines.filter(element => 
                                element.A1_NAME === this.selectedCounty);
  }

  deleteSelectedPMAchine() {
    this.selectedPMachine = "";
  }

}
