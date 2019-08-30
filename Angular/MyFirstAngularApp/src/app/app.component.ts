import {Component, OnInit} from '@angular/core';
import {MusicBrainzService} from "./services/music-brainz.service";
import {MusicBrainzResponse} from "./music-brainz-response";
import {MusicBrainzRelease} from "./music-brainz-release";
import {from, Observable, of} from "rxjs";
import {combineAll, concatAll, concatMap, flatMap, map, mergeMap, mergeMapTo, scan} from 'rxjs/operators';
import {CoverArtArchiveImage} from "./cover-art-archive-image";
import {CoverArtArchiveService} from "./services/cover-art-archive.service";
import {CoverArtArchiveResponse} from "./cover-art-archive-response";
import {CovertArtImageInfo} from "./cover-art-image-info";
import {flatten} from "@angular/compiler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicBrainz Search Front-end';
  band: string;
  /*
    releases: MusicBrainzRelease[];
    aantalReleases: number;
  */
  selectedRelease: MusicBrainzRelease;
  releaseInfo$: Observable<MusicBrainzResponse>;
  releases$: Observable<MusicBrainzRelease[]>;

  images: CoverArtArchiveImage[];

  constructor(private musicBrainzService: MusicBrainzService,
              private coverArtArchiveService: CoverArtArchiveService) {
  }

  searchBand(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.releaseInfo$ = this.musicBrainzService.searchArtist(this.band);

     // this.releases$ = this.releaseInfo$.pipe(map(x => x.releases));

    this.releases$ = this.releaseInfo$.pipe(
      map(x => {
        var releases = x.releases
        releases.forEach((release: MusicBrainzRelease, index: number, arrReleases: MusicBrainzRelease[]) => {
          this.coverArtArchiveService.getCoverArtItems(release.id)
            .subscribe(data => {
              arrReleases[index].coverArtData = data.images;
            });
        });
        return releases;
      })
    );

    this.releases$.subscribe((releases: MusicBrainzRelease[]) => {
    });

    /*
    this.musicBrainzService.searchArtist(this.band).subscribe((data) => {
      this.releases = data.releases;
      this.aantalReleases = data.count;
    });
    */
  }

  selectRelease(event: MouseEvent, release: MusicBrainzRelease) {
    this.selectedRelease = release;
    this.images = release.coverArtData;
    console.log(release);
/*
    this.images$ = this.coverArtArchiveService.getCoverArtItems(release.id)
      .pipe(
        map(response => {
          return response.images;
    }));
*/
  }
}
