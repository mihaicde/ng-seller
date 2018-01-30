import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselActions = new EventEmitter<string|MaterializeAction>();

  @Input()
  imageURLs?: Array<string>;

  constructor() { }

  ngOnInit() {
  }
  
  next() {
    this.carouselActions.emit({ action: 'carousel', params: ['next'] });
  }

  prev() {
    this.carouselActions.emit({ action: 'carousel', params: ['prev'] });
  }
}
