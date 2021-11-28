export class MusicBrainzMedia {
  'disc-count' : number;
  'track-count' : number;
  format : string;


  constructor() {
    this.format = '';
    this["disc-count"] = 0;
    this["track-count"] = 0;
  }
}

