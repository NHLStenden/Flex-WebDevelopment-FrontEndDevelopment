import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  public idItem: Number | undefined = undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.idItem = Number(this.route.snapshot.paramMap.get('idItem'));
  }

}
