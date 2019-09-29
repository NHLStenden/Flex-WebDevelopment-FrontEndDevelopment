export class MusicBrainzArtistDetails {
  name: string;
  id: string;
  'sort-name': string;
  disambiguation: string;
}

export class MusicBrainzArtist {
  artist: MusicBrainzArtistDetails;
  name: string;
}
