import {Component, computed, effect, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Angular 17 test';


  public firstname: WritableSignal<string>;
  public lastname: WritableSignal<string>;
  public age: WritableSignal<number>;
  public comp:any;

  constructor() {
    this.firstname = signal<string>("Martin");
    this.lastname = signal<string>("Molema");
    this.age = signal<number>(19);

    this.comp = computed(() => this.firstname() + ' ' + this.lastname() +  ':' + this.age().toString());
    effect(() => {
      console.log(this.comp());
    });
  }

  ngOnInit(): void {
  }

  increaseAge(): void {
    this.age.update(value => value+1)
  }

}
