import { Component, OnInit } from '@angular/core';
import {StoreService} from "../services/store.service";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-naamfilter',
  templateUrl: './naamfilter.component.html',
  styleUrls: ['./naamfilter.component.css']
})
export class NaamfilterComponent implements OnInit {

  public herhaaldeNaam: string;
  public gewoneNaam: string;

  constructor(private store: StoreService) {
    this.herhaaldeNaam = '????';
    this.gewoneNaam = '????';

    this.store.naam$.subscribe(nieuwenaam => this.gewoneNaam = nieuwenaam)

    this.store.naam$.pipe(
      filter( nieuwenaam => nieuwenaam === 'martin'),
      map(naamIsMartin => naamIsMartin.repeat(3))
    ).subscribe(herhaaldenaamUitPijplijn => {
      this.herhaaldeNaam = herhaaldenaamUitPijplijn;
    });
  }





  ngOnInit(): void {
  }

}
