import {Component, OnInit, Output} from '@angular/core';
import {StoreService} from "../services/store.service";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public naam: string;

  constructor(private store: StoreService) {
    this.naam = 'dit is de waarde van de master component';
  }

  ngOnInit(): void {
    this.store.initialiseerWaarden();
  }

  public onSubmit(event: any) {
    this.store.update(this.naam);
  }

}
