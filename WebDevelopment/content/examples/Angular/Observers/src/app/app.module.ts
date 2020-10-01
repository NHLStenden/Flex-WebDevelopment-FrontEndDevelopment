import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LinksComponent } from './components/links/links.component';
import { RechtsComponent } from './components/rechts/rechts.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    RechtsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
