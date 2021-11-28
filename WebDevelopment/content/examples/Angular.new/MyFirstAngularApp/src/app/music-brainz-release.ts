import {MusicBrainzMedia} from './music-brainz-media';
import {MusicBrainzReleaseGroup} from './music-brainz-release-group';
import {MusicBrainzReleaseEvent} from './music-brainz-release-event';
import {CoverArtArchiveResponse} from './cover-art-archive-response';
import {CoverArtArchiveImage} from './cover-art-archive-image';
import {CovertArtImageInfo} from './cover-art-image-info';
import {MusicBrainzArtist} from './music-brainz-artist';

export class MusicBrainzRelease {
  id: string;
  'artist-credit': MusicBrainzArtist[];
  count: number;
  date: string;
  country: string;
  score: number;
  status: string;
  title: string;
  'track-count': number;
  media: MusicBrainzMedia[];
  'release-group': MusicBrainzReleaseGroup;
  'release-events': MusicBrainzReleaseEvent;
  packaging: string;
  coverArtData: CoverArtArchiveImage[];
  coverArtImages: CovertArtImageInfo[];


  constructor() {
    this.id = '';
    this.count = 0;
    this.country = '';
    this.score = 0;
    this.status = '';
    this.title = '';
    this.media = [];
    this["release-events"] = new MusicBrainzReleaseEvent();
    this["release-group"] = new MusicBrainzReleaseGroup();
    this.packaging = '';
    this.coverArtData = [];
    this.coverArtImages = [];
    this.date = '';
    this.title = '';
  }
}
