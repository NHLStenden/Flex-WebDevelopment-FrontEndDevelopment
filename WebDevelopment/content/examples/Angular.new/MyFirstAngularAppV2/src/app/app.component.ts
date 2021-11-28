import {Component} from '@angular/core';
import {MusicBrainzService} from "./services/music-brainz.service";
import {MusicBrainzResponse} from "./classes/music-brainz-response";
import {MusicBrainzRelease} from "./classes/music-brainz-release";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

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


  constructor(private musicBrainzService: MusicBrainzService) {
    this.band = '';
    this.releases$ = new Observable<MusicBrainzRelease[]>();
    this.releaseInfo$ = new Observable<MusicBrainzResponse>();
  }

  searchBand(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.releaseInfo$ = this.musicBrainzService.searchArtist(this.band);

     // this.releases$ = this.releaseInfo$.pipe(map(x => x.releases));

    // @ts-ignore
    this.releases$ = this.releaseInfo$.pipe(
      map(x => x.releases )
    );

  }


}
