import {Component, Input, OnInit} from '@angular/core';
import {MusicBrainzRelease} from '../../classes/music-brainz-release';
import {Observable} from "rxjs";

@Component({
  selector: 'app-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: ['./release-list.component.css']
})
export class ReleaseListComponent implements OnInit {

  @Input() releases$: Observable<MusicBrainzRelease[]>;
  selectedRelease: MusicBrainzRelease;

  constructor() {
    this.selectedRelease = new MusicBrainzRelease();
    this.releases$ = new Observable<MusicBrainzRelease[]>();
  }

  ngOnInit() {
  }


  selectRelease(event: MouseEvent, release: MusicBrainzRelease) {
    this.selectedRelease = release;
  }

}
