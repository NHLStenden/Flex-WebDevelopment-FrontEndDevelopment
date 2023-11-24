import {Component, OnInit} from '@angular/core';
import {Animal} from "./animal";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  public items: Animal[] = [];
  public isOpen: boolean = true;

  title = 'events-angular01';


  constructor() {
  }

  ngOnInit(): void {
    this.items.push(new Animal('Dog'));
    this.items.push(new Animal('Cat'));
    this.items.push(new Animal('Pig'));
    this.items.push(new Animal('Owl'));
    this.items.push(new Animal('Fish'));
    this.items.push(new Animal('Ferret'));
    this.items.push(new Animal('Pinguin'));
    this.items.push(new Animal('Blue whale'));
    this.items.push(new Animal('Turtle'));
  }

  clickHandler(animal: Animal): void {
    animal.naam = 'Martin';
    animal.wasClicked =! animal.wasClicked;
  }

  openCloseArticle(): void {
    this.isOpen = !this.isOpen;
  }


}
