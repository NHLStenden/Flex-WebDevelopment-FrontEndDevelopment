/**
 * Een class om OpenStreetMap weer te geven met geclusterde markers
 * @module MyOSMMap
 */

export class MyOSMMap {

    // Bevat de
    mymap = null;
    markerList = [];
    markerCluster;
    _items = [];
    _container = null;

    /**
     * This constructor draws the basic map.
     * @constructor
     * @param {Array} items - a list of parking items containing descriptions and coordinates
     * @param {String} idContainer - the HTML-id of an element that will hold the map.
     */
    constructor (items, idContainer){
        this.markerList = [];
        this._items = items;
        this._container = idContainer;
        this.mymap = L.map(idContainer);
        this.mymap.setView([4.9466199,52.3152543], 13);

        // create the tile layer with correct attribution
        var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 18, attribution: osmAttrib});

        this.mymap.addLayer(osm);

        this.markerCluster = L.markerClusterGroup();
    }

    /**
     * This function will create the markers on the map using the list of items that was given to the constructor.
     */

    AddMarkersToMap() {

        // clear previous list
        this.markerCluster.clearLayers();
        this.markerList = [];

        // cycle through the list of items
        for (var i in this._items) {
            var item = this._items[i].parkeerlocatie;

            // parse the current item.
            var coordinates = JSON.parse(item.Locatie).coordinates;
            var info = {};

            info.caption = item.title;
            info.adres = item.adres;
            info.postcode = item.postcode;
            info.opmerkingen = item.opmerkingen;

            // add marker and add it to the list. this list is later used to determine the bounding box
            // so all markers are visible.
             var marker = this.AddGeocodedLocation(info, coordinates);
             this.markerList.push(marker);
        }

        this.mymap.addLayer(this.markerCluster);

        var bounds = L.latLngBounds();
        for (var i in this.markerList) {
            var m = this.markerList[i];
            if (m !== null) bounds.extend(m._latlng);
        }
        this.mymap.fitBounds(bounds);
    }//AddMarkersToMap

    /**
     * This will add a new marker to the map. It will be added to the collection of markers so a cluster can be created
     * @param {Object} info - an object containing more info on the location
     * @param  {Array} coordinates - an array containing LAT + LNG : coordinates[0] = Longitude, coordinates[1]=Latitude
     * @returns {Marker} a Leaflet marker object
     */
    AddGeocodedLocation(info, coordinates) {
        var lat, lng;
        lng = coordinates[0];
        lat = coordinates[1];

        var marker = null;
        var plotll = new L.LatLng(parseFloat(lat), parseFloat(lng), true);

        var msg = "<div class='popup'><H1>" + info.caption + "</H1>";
        msg += "<P>Adres:" + info.adres + "</p>";
        msg += "<P>Postcode:" + info.postcode + "</p>";
        msg += "<P>Opmerkingen:" + info.opmerkingen + "</p>";
        msg += "</div>";

        var myIcon = L.icon({
            iconUrl: 'css/images/marker-icon.png',
            shadowUrl: 'css/images/marker-shadow.png',
            title: info.caption
        });

        // create a marker using Leaflet (L-object = leaflet)
        marker = L.marker(plotll, {icon: myIcon});
        this.markerCluster.addLayer(marker);

        // when clicked, the popup is shown.
        marker.bindPopup(msg).openPopup();

        return marker;
    }//AddGeocodedLocation

}
