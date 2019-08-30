import {CoverArtArchiveThumbnail} from './cover-art-archive-thumbnail';

export class CoverArtArchiveImage {
  approved: boolean;
  back: boolean;
  front: boolean;
  comment: string;
  id: string;
  image: string;
  thumbnails: CoverArtArchiveThumbnail[];
  types: string[];
  edit: number;
}
