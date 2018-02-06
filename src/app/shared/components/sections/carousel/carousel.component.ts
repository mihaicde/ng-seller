import { Component, OnInit, Input } from '@angular/core';
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

  @Input()
  showArrows?: Boolean = true;

  @Input()
  showActionButton?: Boolean = false;

  @Input()
  btnColor: String = 'teal';

  @Input()
  btnText: String = 'About Us';

  @Input()
  btnLink: String = 'theme';

  @Input()
  carouselHeight?: String = '500px';
  

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
