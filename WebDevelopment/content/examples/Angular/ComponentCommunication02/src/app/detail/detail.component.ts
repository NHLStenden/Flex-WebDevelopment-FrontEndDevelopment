import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {StoreService} from "../services/store.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  /**
   * Gebruik "Dependency injection" om een store te injecteren. Angular zorgt voor de juiste initialisatie.
   * @param store
   */
  constructor(public store: StoreService) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log("Submit!");
  }

}
