import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit, AfterViewInit  {
  private map: any;
  centerX = 59.430977
  centerY = 24.730144
  zoom = 12
  marker: any;
  marker2: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.centerX, this.centerY ],
      zoom: this.zoom
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.marker = L.marker([59.440977, 24.732144]);
    this.marker.addTo(this.map)
    this.marker.bindPopup("<div><b>Telliskivi kauplus</b><br>E-R 9.00-17.00<br>L-P Suletud</div>")

    this.marker2 = L.marker([59.426217572751405, 24.725512852017854]);
    this.marker2.addTo(this.map)
    this.marker2.bindPopup("<b>Kristiine kauplus</b><br>E-R 9.00-22.00<br>L-P 10.00-22.00")
    
 
    

  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void { 
    this.initMap();
  }


  zoomStore(x: number, y: number, zoom: number, pood: string) {


    this.marker.bindPopup().closePopup();
    this.marker2.bindPopup().closePopup();
    this.map.setView(L.latLng([x,y]), zoom);

    if (pood === "Telliskivi") {
      this.marker.bindPopup("<b>Telliskivi kauplus</b><br>E-R 9.00-22.00<br>L-P 10.00-22.00").openPopup();
      this.map.setView(L.latLng([x,y]), zoom);
    }

    else if (pood === "Kristiine") {
      this.marker2.bindPopup("<b>Kristiine kauplus</b><br>E-R 9.00-22.00<br>L-P 10.00-22.00").openPopup();
      this.map.setView(L.latLng([x,y]), zoom);
    }

  }






}


