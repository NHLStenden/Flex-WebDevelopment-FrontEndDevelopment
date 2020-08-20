import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReleaseListComponent } from './components/release-list/release-list.component';
import { ReleaseDetailsComponent } from './components/release-details/release-details.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleaseListComponent,
    ReleaseDetailsComponent,
    ImageListComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
