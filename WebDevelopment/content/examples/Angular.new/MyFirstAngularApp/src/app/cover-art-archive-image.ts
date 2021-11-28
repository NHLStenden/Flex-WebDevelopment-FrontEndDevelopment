import {CoverArtArchiveThumbnail} from './cover-art-archive-thumbnail';

export class CoverArtArchiveImage {
  approved: boolean;
  back: boolean;
  front: boolean;
  comment: string;
  id: string;
  image: string;
  thumbnails: CoverArtArchiveThumbnail;
  types: string[];
  edit: number;


  constructor() {
    this.approved = false;
    this.back = false;
    this.front = false;
    this.comment = '';
    this.id = '';
    this.image = '';
    this.thumbnails = new CoverArtArchiveThumbnail();
    this.types = [];
    this.edit = 0;
  }
}
