import {Component, Input, OnInit} from '@angular/core';
import {FietsInfoService} from '../../services/fiets-info.service';
import {ParkeerLocatie} from '../../classes/parkeer-locatie';
import {OsmMap} from '../../classes/osm-map';

@Component({
  selector: 'app-osm-fiets-kaart',
  templateUrl: './osm-fiets-kaart.component.html',
  styleUrls: ['./osm-fiets-kaart.component.css']
})

export class OsmFietsKaartComponent implements OnInit {

  private map: OsmMap;

  @Input() Leaflet: any;

  constructor(private fietsInfoService: FietsInfoService) {
  }

  ngOnInit() {
    this.map = new OsmMap(this.Leaflet, 'osmmap');
    this.fietsInfoService.getFietsInfo().subscribe(
      data => {
        this.map.AddMarkersToMap(data);
      }
    );
  }

}
