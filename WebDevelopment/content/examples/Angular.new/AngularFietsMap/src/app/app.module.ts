import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OsmFietsKaartComponent } from './components/osm-fiets-kaart/osm-fiets-kaart.component';
import {HttpClientModule} from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {LeafletMarkerClusterModule} from "@asymmetrik/ngx-leaflet-markercluster";
import { ParkeerlocatieDetailsComponent } from './components/parkeerlocatie-details/parkeerlocatie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    OsmFietsKaartComponent,
    ParkeerlocatieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule,
    LeafletMarkerClusterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
