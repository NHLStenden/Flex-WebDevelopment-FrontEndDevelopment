import { Component } from '@angular/core';
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-counter-visualiser',
  templateUrl: './counter-visualiser.component.html',
  styleUrls: ['./counter-visualiser.component.css']
})
export class CounterVisualiserComponent {

  constructor(public counterService: CounterService) {
  }


}
