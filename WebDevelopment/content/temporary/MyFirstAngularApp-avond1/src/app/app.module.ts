import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaamInformatieComponent } from './naam-informatie/naam-informatie.component';

@NgModule({
  declarations: [
    AppComponent,
    NaamInformatieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
