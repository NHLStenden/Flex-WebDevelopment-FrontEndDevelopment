import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  title = 'AngularFietsMap';
  Leaflet = L;

  constructor() {
    console.log('AppComponent::constructor');
  }

  ngAfterViewInit(): void {
    console.log('AppComponent::ngAfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent::ngOnChanges');
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('AppComponent::ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('AppComponent::ngOnInit');
  }

}
