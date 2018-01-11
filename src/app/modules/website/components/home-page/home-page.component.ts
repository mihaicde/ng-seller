import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import { ProgressWidthService } from '../../services/progress-width.service';
import { PageService } from '../../services/page.service';
import { WebsiteService } from '../../../admin/services/website.service';

import { Page } from '../../../../models/pages/Page';
import { HomePresentationPage } from '../../../../models/pages/HomePresentation';
import { HomeEcommercePage } from '../../../../models/pages/HomeEcommerce';

import { pageTypes } from '../../../../models/pages/PageType';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  
  homePage: string;
  websiteDetails: any;
  
  constructor(
    private progressServices: ProgressWidthService,
    private pageService: PageService,
    private websiteService: WebsiteService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  
  ngOnInit() {
    this.progressServices.setProgress('55%');
    this.websiteDetails = this.websiteService.getWebsite();
    console.log(this.websiteDetails);
  }

  select(){
   
    if(this.homePage) {
      switch(this.homePage) {
        case 'ecommerce': {
          console.log('este ecoom');
          const page = new Page(JSON.parse(JSON.stringify({
            website_id: this.websiteDetails.id,
            type: pageTypes.home.ecommerce,
            active: true,
          //   summary: JSON.stringify(new HomeEcommercePage(JSON.parse(JSON.stringify({})))
          })));
          console.log(page);
          this.pageService.store(page)
          .subscribe(
            data => {
              console.log(data);
              this.router.navigate(['/website/contact']);
            },
            error => {
              console.log(error.error.message);
            }
          )      
          break;
        }      
        case 'view': {
          console.log('este site de prezentare');
          const page = new Page(JSON.parse(JSON.stringify({
            website_id: this.websiteDetails.id,
            type: pageTypes.home.presentation,
            active: true,
            // summary: new HomeEcommercePage(JSON.parse(JSON.stringify({})))
          })));
          console.log(page);
          this.pageService.store(page)
          .subscribe(
            data => {
              console.log(data);
              this.router.navigate(['/website/contact']);
            },
            error => {
              console.log(error);
            }
          )
          break;
        }
      }
    }
  }
}
