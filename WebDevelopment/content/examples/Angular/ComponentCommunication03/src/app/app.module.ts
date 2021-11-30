import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MasterComponent} from "./master/master.component";
import {DetailComponent} from "./detail/detail.component";
import {FormsModule} from "@angular/forms";
import { NaamfilterComponent } from './naamfilter/naamfilter.component';

@NgModule({
  declarations: [
    AppComponent, MasterComponent, DetailComponent, NaamfilterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
