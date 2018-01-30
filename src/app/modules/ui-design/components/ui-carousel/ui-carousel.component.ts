import { Component, OnInit, ViewChild } from '@angular/core';

import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-ui-carousel',
  templateUrl: './ui-carousel.component.html'
})
export class UiCarouselComponent implements OnInit {
  carouselHeight= '800px;'

  @ViewChild('carousel1')
  carouselComponent1: CarouselComponent;

  @ViewChild('carousel2')
  carouselComponent2: CarouselComponent;

  images = [
    'assets/images/ui/kinzig-fischer-bach-black-forest-water-158316.jpeg',
    'assets/images/ui/pexels-photo-227417.jpeg',
    'assets/images/ui/pexels-photo-378570.jpeg',
    'assets/images/ui/pexels-photo-534757.jpeg'    
  ];

  images2 = [
    'assets/images/ui/kinzig-fischer-bach-black-forest-water-158316.jpeg',
    'assets/images/ui/pexels-photo-227417.jpeg',
    'assets/images/ui/pexels-photo-378570.jpeg',
    'assets/images/ui/pexels-photo-534757.jpeg'    
  ];

  constructor() { }

  ngOnInit() {
    this.carouselComponent1.imageURLs = this.images;
    this.carouselComponent2.imageURLs = this.images2;
  }
  
  // next() {
  //   this.carouselComponent1.next();
  // }

  // prev() {
  //   this.carouselComponent1.prev();
  // }

}
