import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {StoreService} from "../services/store.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public naam : string;

  constructor(private store: StoreService) {
    this.naam = '';
    this.store.naam$.subscribe( data => {
      this.naam = data;
    });
  }

  ngOnInit(): void {

  }

  public onSubmit(): void {
    console.log("Submit!");
  }

}
