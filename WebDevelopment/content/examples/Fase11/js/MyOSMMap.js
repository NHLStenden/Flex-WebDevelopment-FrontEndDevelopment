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
     * @constructor
     * @param items
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
     *
     * @param idContainer
     * @param items
     */

    CreateOpenStreetMap(idContainer) {

        this.markerCluster.clearLayers();
        this.markerList = [];

        for (var i in this._items) {
            var item = this._items[i].parkeerlocatie;

            var coordinates = JSON.parse(item.Locatie).coordinates;
            var info = {};

            info.caption = item.title;
            info.adres = item.adres;
            info.postcode = item.postcode;
            info.opmerkingen = item.opmerkingen;

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
    }

    /**
     *
     * @param info
     * @param coordinates
     * @returns {*}
     * @constructor
     */
    AddGeocodedLocation(info, coordinates) {
        var lat, lng;
        lat = coordinates[0];
        lng = coordinates[1];

        var marker = null;
        var plotll = new L.LatLng(parseFloat(lng), parseFloat(lat), true);
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

        marker = L.marker(plotll, {icon: myIcon});
        this.markerCluster.addLayer(marker);
        marker.bindPopup(msg).openPopup();

        return marker;
    }//AddGeocodedLocation

}
