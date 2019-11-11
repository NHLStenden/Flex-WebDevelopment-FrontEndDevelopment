import {Component, Input, OnInit} from '@angular/core';
import {MusicBrainzRelease} from '../../classes/music-brainz-release';
import {map} from 'rxjs/operators';
import {CoverArtArchiveService} from '../../services/cover-art-archive.service';
import {Observable} from 'rxjs';
import {CoverArtArchiveImage} from '../../classes/cover-art-archive-image';

@Component({
  selector: 'app-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: ['./release-list.component.css']
})
export class ReleaseListComponent implements OnInit {

  @Input() releases$: Observable<MusicBrainzRelease[]>;
  selectedRelease: MusicBrainzRelease;
  constructor() { }

  ngOnInit() {
  }


  selectRelease(event: MouseEvent, release: MusicBrainzRelease) {
    this.selectedRelease = release;
  }

}
