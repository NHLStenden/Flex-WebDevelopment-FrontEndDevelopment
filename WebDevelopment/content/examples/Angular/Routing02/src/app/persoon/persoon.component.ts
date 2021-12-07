import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GlobalStorageService} from "../services/global-storage.service";

@Component({
  selector: 'app-persoon',
  templateUrl: './persoon.component.html',
  styleUrls: ['./persoon.component.css']
})
export class PersoonComponent implements OnInit {

  public idPerson: number;
  public naam: string;

  constructor(private route: ActivatedRoute,
              private store: GlobalStorageService) {
    this.idPerson = -1;
    this.naam = '';
  }

  ngOnInit(): void {
    // haal de id uit de URL
    this.route.paramMap.subscribe(params => {
      if (params.get('id') !== null){
        const id = params.get('id');
        if (typeof id === "string") {
          this.idPerson = parseInt(id, 10);
          // hier weten we eindelijk welke primary key van een persoon doorgegeven is.

          const persoon = this.store.personen.find(p => p.id === this.idPerson);
          if (persoon !== undefined) {
            this.naam = persoon.naam;
          }
          else{
            this.naam = '???';
          }
        }
      }

    });
  }

}
