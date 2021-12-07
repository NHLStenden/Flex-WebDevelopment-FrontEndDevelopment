import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-persoon',
  templateUrl: './persoon.component.html',
  styleUrls: ['./persoon.component.css']
})
export class PersoonComponent implements OnInit {

  public idPerson: number;
  public naam: string;

  constructor(private route: ActivatedRoute) {
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

          switch(this.idPerson){
            case 1:
              this.naam = 'Martin Molema';
              break;
            case 2:
              this.naam = 'Pietje Puk';
              break;
            default:
              this.naam = '?????';
              break;
          }
          // hier weten we eindelijk welke primary key van een persoon doorgegeven is.
        }
      }

    });
  }

}
