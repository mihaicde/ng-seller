import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../utils/router.animations';
import { AboutUsPageComponent } from '../about-us-page/about-us-page.component';

import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-website-main',
  animations: [ routerTransition ],
  templateUrl: './website-main.component.html',
  styleUrls: ['./website-main.component.scss']
})
export class WebsiteMainComponent implements OnInit {
 
  constructor(
    private progressService: ProgressWidthService
  ) { }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {
   
  }

}
