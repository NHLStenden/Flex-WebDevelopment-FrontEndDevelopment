import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ParkeerLocatie} from '../../classes/parkeer-locatie';

@Component({
  selector: 'app-parkeerlocatie-details',
  templateUrl: './parkeerlocatie-details.component.html',
  styleUrls: ['./parkeerlocatie-details.component.css']
})
export class ParkeerlocatieDetailsComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @Input() parkeerlocatie: ParkeerLocatie;

  constructor() {
    console.log('ParkeerlocatieDetailsComponent::constructor');

    let x = [1, 2, 3, 4];
    x.push(5); // geen change detection
    x = [...x]; // destructor/spread operator: pak de array x uit . [] => maak er een nieuwe array van.==> change detection
  }

  ngOnInit(): void {
    console.log('ParkeerlocatieDetailsComponent::ngOnInit');
    console.log(this.parkeerlocatie);
  }

  ngAfterViewInit(): void {
    console.log('ParkeerlocatieDetailsComponent::ngAfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParkeerlocatieDetailsComponent::ngOnChanges');
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('ParkeerlocatieDetailsComponent::ngOnDestroy');
  }

}
