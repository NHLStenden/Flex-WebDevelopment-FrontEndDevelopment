import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  // public studenten$: string[];

  public studenten$: Observable<string[]>;

  constructor(private store: StoreService) {
    this.studenten$ = this.store.getStudenten();
  }

  ngOnInit(): void {
  }

  selecteerStudent(student: string): void {
    this.store.selecteerStudent(student);
  }

/*
  ngOnInit(): void {
    this.store.getStudenten().subscribe(
      data => this.studenten$ = data
    );
  }*/


}
