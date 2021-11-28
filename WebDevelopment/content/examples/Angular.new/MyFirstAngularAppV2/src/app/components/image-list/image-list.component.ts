import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoverArtArchiveImage} from '../../classes/cover-art-archive-image';
import {Observable} from "rxjs";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  @Input() images$: Observable<CoverArtArchiveImage[]>;
  @Output() onSelectImage: EventEmitter<CoverArtArchiveImage> = new EventEmitter<CoverArtArchiveImage>();

  constructor() {
    this.images$ = new Observable<CoverArtArchiveImage[]>();
  }

  ngOnInit() {
  }

  selectImage(event: MouseEvent, image: CoverArtArchiveImage){
    this.onSelectImage.emit(image);
  }


}
