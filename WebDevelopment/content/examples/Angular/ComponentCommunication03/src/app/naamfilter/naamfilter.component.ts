import { Component, OnInit } from '@angular/core';
import {StoreService} from "../services/store.service";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-naamfilter',
  templateUrl: './naamfilter.component.html',
  styleUrls: ['./naamfilter.component.css']
})
export class NaamfilterComponent implements OnInit {

  public naam: string;

  constructor(private store: StoreService) {
    this.naam = '????';

    this.store.naam$.pipe(
      filter( waarde => waarde === 'martin'),
      map(waarde => waarde.repeat(3))
    ).subscribe(x => {
      this.naam = x;
    });
  }

  ngOnInit(): void {
  }

}
