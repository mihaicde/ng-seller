import { Component, OnInit } from '@angular/core';

import { AboutUsPageComponent } from '../about-us-page/about-us-page.component';

import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-website-main',
  templateUrl: './website-main.component.html'
})
export class WebsiteMainComponent implements OnInit {
 
  constructor(
    private progressService: ProgressWidthService
  ) { }

  ngOnInit() {
   
  }

}
