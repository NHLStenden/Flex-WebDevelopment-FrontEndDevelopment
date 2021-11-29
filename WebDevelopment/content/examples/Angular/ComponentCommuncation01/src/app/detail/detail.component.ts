import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() data: string;
  @Output() selectedSomething = new EventEmitter<string>();

  constructor() {
    this.data = '';
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log("Submit!");
    this.selectedSomething.emit(this.data);
  }

}
