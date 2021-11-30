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
    this.naam = '??';
  }

  ngOnInit(): void {

  }

  public onSubmit(event: any) {
    this.store.update(this.naam);
  }

}
