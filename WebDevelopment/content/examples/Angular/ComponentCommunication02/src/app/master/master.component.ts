import {Component, OnInit} from '@angular/core';
import {StoreService} from "../services/store.service";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  /**
   * Gebruik "Dependency injection" om een store te injecteren. Angular zorgt voor de juiste initialisatie.
   * @param store
   */
  constructor(public store: StoreService) { }

  ngOnInit(): void {
  }

}
