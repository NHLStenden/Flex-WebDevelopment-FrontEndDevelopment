import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../animal";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements  OnInit {

  @Input() itemList: Animal[] = [];

  @Output() itemWasClicked: EventEmitter<Animal> = new EventEmitter<Animal>();

  ngOnInit(): void {
  }

  itemClickHandler(animal: Animal): void {
     this.itemWasClicked.emit(animal);
     console.log(animal);
  }

}
