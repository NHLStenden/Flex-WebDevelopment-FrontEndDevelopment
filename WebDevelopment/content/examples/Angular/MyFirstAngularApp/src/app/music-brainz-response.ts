import {MusicBrainzRelease} from './music-brainz-release';

export class MusicBrainzResponse {
  created: string;
  releases: MusicBrainzRelease[];
  count: number;
}
