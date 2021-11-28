import {CoverArtArchiveImage} from './cover-art-archive-image';

export class CoverArtArchiveResponse {
  images: CoverArtArchiveImage[];
  release: string;


  constructor() {
    this.images = [];
    this.release = '';
  }
}
