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

  constructor(locatie: object) {
    // @ts-ignore
    this.title = locatie.title;
    // @ts-ignore
    this.Locatie = locatie.Locatie;
    // @ts-ignore
    this.type = locatie.type;
    // @ts-ignore
    this.url = locatie.url;
    // @ts-ignore
    this.adres = locatie.adres;
    // @ts-ignore
    this.woonplaats = locatie.woonplaats;
    // @ts-ignore
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
