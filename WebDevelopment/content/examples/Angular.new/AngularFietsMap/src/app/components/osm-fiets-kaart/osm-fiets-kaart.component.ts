import {Component, Input, NgZone, OnInit} from '@angular/core';
import {FietsInfoService} from '../../services/fiets-info.service';
import {MyOsmMap} from '../../classes/my-osm-map';
import {icon, latLng, marker, tileLayer} from "leaflet";
import 'leaflet.markercluster';
import {ParkeerLocatie} from "../../classes/parkeer-locatie";
import * as L from "leaflet";

@Component({
  selector: 'app-osm-fiets-kaart',
  templateUrl: './osm-fiets-kaart.component.html',
  styleUrls: ['./osm-fiets-kaart.component.css']
})

export class OsmFietsKaartComponent implements OnInit {

  public options: any;
  public baselayers: any;
  markerClusterData: L.Marker[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;
  public selectedLocatie: ParkeerLocatie;

  constructor(private fietsInfoService: FietsInfoService,
              private zone: NgZone) {
  }

  ngOnInit() {
    this.options = {
      zoom: 13,
      center: latLng(52.3152543, 4.9466199)

    };
    const LAYER_OSM = {
      id: 'openstreetmap',
      name: 'Open Street Map',
      enabled: false,
      layer:tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18, attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        })
    };

    this.baselayers = {
      'Open Street Map': LAYER_OSM.layer
    };

    this.fietsInfoService.getFietsInfo().subscribe(
      data => {
        this.AddMarkersToMap(data);
      }
    );
  }

  /**
   * This function will create the markers on the map using the list of items that was given to the constructor.
   */

  AddMarkersToMap(items: Array<ParkeerLocatie>) {

    // clear previous list
    this.markerClusterData = [];

    // cycle through the list of items
    items.forEach((value: ParkeerLocatie, index: number, array: Array<ParkeerLocatie>) => {
      // add marker and add it to the list. this list is later used to determine the bounding box
      // so all markers are visible.
      const marker = this.AddGeocodedLocation(value);
      this.markerClusterData.push(marker);
    });
  }// AddMarkersToMap

  /**
   */


  /**
   * This will add a new marker to the map. It will be added to the collection of markers so a cluster can be created
   * @param locatie
   * @returns a Leaflet marker object
   */
  AddGeocodedLocation(locatie: ParkeerLocatie) {
    const plotll = latLng(locatie.coordinates.lat, locatie.coordinates.lng, 0);

    let msg = '<div class=\'popup\'><H1>' + locatie.title + '</H1>';
    msg += '<P>Adres:' + locatie.adres + '</p>';
    msg += '<P>Postcode:' + locatie.postcode + '</p>';
    msg += '<P>Opmerkingen:' + locatie.opmerkingen + '</p>';
    msg += '</div>';

    let amarker = marker(plotll, {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      }),
      title: locatie.title
    });

    // when clicked, the popup is shown.
    amarker.bindPopup(msg).openPopup();

    /*
    Have a look at the docs at https://github.com/Asymmetrik/ngx-leaflet#a-note-about-change-detection
    for triggering Angular change detection.
     */
    amarker.on('click', event => {
      this.zone.run(() => {
        this.selectedLocatie =  locatie;
      });

    });

    return amarker;
  }// AddGeocodedLocation


}
