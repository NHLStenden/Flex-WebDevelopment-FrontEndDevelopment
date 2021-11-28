export class MusicBrainzArtistDetails {
  name: string;
  id: string;
  'sort-name': string;
  disambiguation: string;

  constructor() {
    this.name = '';
    this.id = '';
    this.disambiguation = '';
    this["sort-name"] = '';
  }
}

export class MusicBrainzArtist {
  artist: MusicBrainzArtistDetails;
  name: string;


  constructor() {
    this.name = '';
    this.artist = new MusicBrainzArtistDetails();
  }
}
