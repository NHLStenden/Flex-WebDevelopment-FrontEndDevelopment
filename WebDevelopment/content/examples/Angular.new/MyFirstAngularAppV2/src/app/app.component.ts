import {Component, OnInit} from '@angular/core';
import {MusicBrainzService} from "./services/music-brainz.service";
import {MusicBrainzResponse} from "./classes/music-brainz-response";
import {MusicBrainzRelease} from "./classes/music-brainz-release";
import {from, Observable, of} from "rxjs";
import {combineAll, concatAll, concatMap, flatMap, map, mergeMap, mergeMapTo, scan} from 'rxjs/operators';
import {CoverArtArchiveImage} from "./classes/cover-art-archive-image";
import {CoverArtArchiveService} from "./services/cover-art-archive.service";
import {CoverArtArchiveResponse} from "./classes/cover-art-archive-response";
import {CovertArtImageInfo} from "./classes/cover-art-image-info";
import {flatten} from "@angular/compiler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicBrainz Search Front-end';
  band: string;

  releaseInfo$: Observable<MusicBrainzResponse>;
  releases$: Observable<MusicBrainzRelease[]>;


  constructor(private musicBrainzService: MusicBrainzService,
              private coverArtArchiveService: CoverArtArchiveService) {
  }

  searchBand(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.releaseInfo$ = this.musicBrainzService.searchArtist(this.band);

     // this.releases$ = this.releaseInfo$.pipe(map(x => x.releases));

    this.releases$ = this.releaseInfo$.pipe(
      map(x => x.releases )
    );

  }


}
