import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {MusicBrainzRelease} from '../../classes/music-brainz-release';
import {map} from 'rxjs/operators';
import {CoverArtArchiveService} from '../../services/cover-art-archive.service';
import {Observable} from 'rxjs';
import {CoverArtArchiveImage} from '../../classes/cover-art-archive-image';

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
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.images$ = this.coverArtArchiveService.getCoverArtItems(this.release.id)
      .pipe(
        map(response => {
          return response.images;
        }));
    this.selectedImage = null;
  }

  imageSelected(image: CoverArtArchiveImage){
    this.selectedImage = image;
  }
}


