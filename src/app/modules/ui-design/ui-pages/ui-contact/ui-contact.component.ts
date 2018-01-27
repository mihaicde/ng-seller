import { Component, OnInit } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-ui-contact',
  templateUrl: './ui-contact.component.html',
  styles: [`
    
  `],
  // styleUrls: ['./ui-contact.component.css']
})
export class UiContactComponent implements OnInit {

  lat: number = 44.417621;
  lng: number = 26.136114;
  agmHeight: string = '300px';

  formColor :string = "teal";
  colors :Array<string> = [
    "teal",
    "red",
    "cyan",
    "pink darken-4",
    "purple darken-4"
  ];

  constructor() { }

  ngOnInit() {
  }

  changeColor(color) {
    console.log(color);
    this.formColor = color;
  }
}
