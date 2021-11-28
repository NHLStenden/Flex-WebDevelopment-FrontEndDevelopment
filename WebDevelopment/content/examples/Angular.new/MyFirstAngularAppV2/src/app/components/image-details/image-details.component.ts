import {Component, Input, OnInit} from '@angular/core';
import {CoverArtArchiveImage} from '../../classes/cover-art-archive-image';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  @Input() image: CoverArtArchiveImage;

  constructor() {
    this.image = new CoverArtArchiveImage();
  }

  ngOnInit() {
  }

}
