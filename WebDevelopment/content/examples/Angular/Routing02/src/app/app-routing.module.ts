import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingpageComponent} from "./landingpage/landingpage.component";
import {DisclaimerComponent} from "./disclaimer/disclaimer.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {PersoonComponent} from "./persoon/persoon.component";

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'persoon/:id', component: PersoonComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
