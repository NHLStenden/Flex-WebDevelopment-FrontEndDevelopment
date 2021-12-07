import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PersoonComponent } from './persoon/persoon.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    AboutPageComponent,
    DisclaimerComponent,
    PersoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
