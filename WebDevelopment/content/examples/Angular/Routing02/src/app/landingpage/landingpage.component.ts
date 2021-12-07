import { Component, OnInit } from '@angular/core';
import {Persoon} from "../classes/persoon";
import {GlobalStorageService} from "../services/global-storage.service";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  personen: Array<Persoon>;

  constructor(private store: GlobalStorageService) {
    this.personen = this.store.personen;
  }

  ngOnInit(): void {
  }

}
