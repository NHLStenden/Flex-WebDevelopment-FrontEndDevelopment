import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MijnEersteComponentComponent } from './mijn-eerste-component/mijn-eerste-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MijnEersteComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
