/**
 * Een class om OpenStreetMap weer te geven met geclusterde markers
 * @module MyOSMMap
 */
import {ParkeerLocatie} from './parkeer-locatie';

export class OsmMap {

  mymap = null;
  markerList = [];
  markerCluster;
  container = null;
  private L: any;

  /**
   * This constructor draws the basic map.
   * @param {Array} items - a list of parking items containing descriptions and coordinates
   * @param {String} idContainer - the HTML-id of an element that will hold the map.
   */
  constructor(leaflet: any, idContainer: string) {
    this.L = leaflet;

    this.markerList = [];
    this.container = idContainer;
    this.mymap = this.L.map(idContainer);
    this.mymap.setView([52.3152543, 4.9466199], 13);

    // create the tile layer with correct attribution
    const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
    const osm = new this.L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 18, attribution: osmAttrib});

    this.mymap.addLayer(osm);

    this.markerCluster = this.L.markerClusterGroup();
  }

  /**
   * This function will create the markers on the map using the list of items that was given to the constructor.
   */

  AddMarkersToMap(items: Array<ParkeerLocatie>) {

    // clear previous list
    this.markerCluster.clearLayers();
    this.markerList = [];

    // cycle through the list of items
    items.forEach((value: ParkeerLocatie, index: number, array: Array<ParkeerLocatie>) => {
      // add marker and add it to the list. this list is later used to determine the bounding box
      // so all markers are visible.
      const marker = this.AddGeocodedLocation(value);
      this.markerList.push(marker);
    });

    this.mymap.addLayer(this.markerCluster);

    const bounds = this.L.latLngBounds();

    this.markerList.forEach((value: any, index: number, array: Array<any>) => {
        bounds.extend(value._latlng);
    });
    this.mymap.fitBounds(bounds);
  }// AddMarkersToMap

  /**
   */


  /**
   * This will add a new marker to the map. It will be added to the collection of markers so a cluster can be created
   * @param locatie
   * @returns a Leaflet marker object
   */
  AddGeocodedLocation(locatie: ParkeerLocatie) {
    const lng = locatie.coordinates.lng;
    const lat = locatie.coordinates.lat;

    let marker = null;
    const plotll = new this.L.LatLng(lat, lng, true);

    let msg = '<div class=\'popup\'><H1>' + locatie.title + '</H1>';
    msg += '<P>Adres:' + locatie.adres + '</p>';
    msg += '<P>Postcode:' + locatie.postcode + '</p>';
    msg += '<P>Opmerkingen:' + locatie.opmerkingen + '</p>';
    msg += '</div>';

    const myIcon = this.L.icon({
      iconUrl: 'assets/css/images/marker-icon.png',
      shadowUrl: 'assets/css/images/marker-shadow.png',
      title: locatie.title
    });

    // create a marker using Leaflet (L-object = leaflet)
    marker = this.L.marker(plotll, {icon: myIcon});
    this.markerCluster.addLayer(marker);

    // when clicked, the popup is shown.
    marker.bindPopup(msg).openPopup();

    return marker;
  }// AddGeocodedLocation

}// class
