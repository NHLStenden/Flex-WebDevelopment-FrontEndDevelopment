import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterVisualiserComponent } from './components/counter-visualiser/counter-visualiser.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterVisualiserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
