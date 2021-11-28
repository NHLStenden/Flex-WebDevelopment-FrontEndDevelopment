import {LatLng} from './lat-lng';

export class ParkeerLocatie {
  public title: string;
  public Locatie: string;
  public type: string;
  public url: string;
  public adres: string;
  public postcode: string;
  public woonplaats: string;
  public opmerkingen: string;

  constructor(locatie: any) {
    this.postcode = locatie.postcode;
    this.title = locatie.title;
    this.Locatie = locatie.Locatie;
    this.type = locatie.type;
    this.url = locatie.url;
    this.adres = locatie.adres;
    this.woonplaats = locatie.woonplaats;
    this.opmerkingen = locatie.opmerkingen;
  }

  get coordinates(): LatLng {
    const json = JSON.parse(this.Locatie);

    const lat = json.coordinates[1];
    const lng = json.coordinates[0];

    const coords = new LatLng(lat, lng);

    return coords;
  }
}
