import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() invoervariabele: string;
  @Output() dataHasChanged = new EventEmitter<string>();

  constructor() {
    this.invoervariabele = '';
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log("Submit!");
    this.dataHasChanged.emit(this.invoervariabele);
  }

}
