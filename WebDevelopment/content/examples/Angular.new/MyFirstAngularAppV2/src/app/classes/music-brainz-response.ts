import {MusicBrainzRelease} from './music-brainz-release';

export class MusicBrainzResponse {
  created: string;
  releases: MusicBrainzRelease[];
  count: number;


  constructor() {
    this.releases = [];
    this.count = 0;
    this.created = '';
  }
}
