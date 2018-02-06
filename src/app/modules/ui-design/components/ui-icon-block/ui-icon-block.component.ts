import { Component, ViewChild, OnInit } from '@angular/core';

import { IconBlockComponent } from '../../../../shared/components/sections/icon-block/icon-block.component';

@Component({
  selector: 'app-ui-icon-block',
  templateUrl: './ui-icon-block.component.html'
})
export class UiIconBlockComponent implements OnInit {

  @ViewChild('iconSection')
  iconSection: IconBlockComponent;

  iconSectionItems : Array<object> = [
    {
      "icon" : "flash_on",
      "title": "Speeds up development",
      "text": "We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers"
    },
    {
      "icon" : "group",
      "title": "User Experience Focused",
      "text": "By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience"
    },
    {
      "icon" : "settings",
      "title": "Easy to work with",
      "text": "We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize"
    }
  ];

  images = [
    "Speeds up development",
    "Speeds up development",
    "Speeds up development"   
  ];
  

  constructor() { }

  ngOnInit() {
    this.iconSection.sectionArray = this.iconSectionItems;
  }

}
