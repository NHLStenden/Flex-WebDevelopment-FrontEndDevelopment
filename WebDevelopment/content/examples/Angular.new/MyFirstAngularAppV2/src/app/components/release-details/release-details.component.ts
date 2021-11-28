import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {MusicBrainzRelease} from '../../classes/music-brainz-release';
import {map} from 'rxjs/operators';
import {CoverArtArchiveService} from '../../services/cover-art-archive.service';
import {CoverArtArchiveImage} from '../../classes/cover-art-archive-image';
import {Observable} from "rxjs";

@Component({
  selector: 'app-release-details',
  templateUrl: './release-details.component.html',
  styleUrls: ['./release-details.component.css']
})
export class ReleaseDetailsComponent implements OnInit, OnChanges {
  @Input() release: MusicBrainzRelease;
  images$: Observable<CoverArtArchiveImage[]>;
  selectedImage: CoverArtArchiveImage;

  constructor(private coverArtArchiveService: CoverArtArchiveService) {
    this.selectedImage = new CoverArtArchiveImage();
    this.release = new MusicBrainzRelease();
    this.images$ = new Observable<CoverArtArchiveImage[]>();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (! this.release) { return ; }
    this.images$ = this.coverArtArchiveService.getCoverArtItems(this.release.id)
      .pipe(
        map(response => {
          // @ts-ignore
          return response.images;
        }));
    this.selectedImage = new CoverArtArchiveImage();
  }

  imageSelected(image: CoverArtArchiveImage){
    this.selectedImage = image;
  }
}


