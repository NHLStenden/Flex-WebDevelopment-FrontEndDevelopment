import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public naam = ""; // implicit declaration of type string.

  constructor() { }

  ngOnInit(): void {
  }

  public childHasChanged(newdata: string): void {
    console.log(newdata);
    this.naam = newdata;
  }

}
