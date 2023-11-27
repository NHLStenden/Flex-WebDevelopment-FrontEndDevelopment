import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-startpagina',
  templateUrl: './startpagina.component.html',
  styleUrls: ['./startpagina.component.css']
})
export class StartpaginaComponent {

  constructor(private router: Router) {

  }

  GotoItemDetails(): void {
    console.log('Geklikt')
     this.router.navigate(['items', 1234]);
  }
}
