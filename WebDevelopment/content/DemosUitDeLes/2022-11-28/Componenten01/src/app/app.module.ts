import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersoonsgegevensComponent } from './components/persoonsgegevens/persoonsgegevens.component';
import { LeeftijdComponent } from './components/leeftijd/leeftijd.component';

@NgModule({
  declarations: [
    AppComponent,
    PersoonsgegevensComponent,
    LeeftijdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
