import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StartpaginaComponent} from "./components/startpagina/startpagina.component";
import {ItemlistComponent} from "./components/itemlist/itemlist.component";
import {ItemDetailsComponent} from "./components/item-details/item-details.component";

const routes: Routes = [
  { path: '', component:StartpaginaComponent },
  { path: 'items', component:ItemlistComponent },
  { path: 'items/:idItem', component: ItemDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    [
      RouterModule
    ]
  ]
})
export class AppRoutingModule {

}
