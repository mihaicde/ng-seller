import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { Page } from '../../../../models/pages/Page';
import { ContactPage } from '../../../../models/pages/Contact';
import { BaseContent } from '../../../../models/pages/BaseContent';

import { PageService } from '../../services/page.service';
import { WebsiteService } from '../../../admin/services/website.service';
import { ProgressWidthService } from '../../services/progress-width.service';

import { pageTypes } from '../../../../models/pages/PageType';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html'
})

export class AboutUsPageComponent implements OnInit {

  aboutPage: boolean;
  websiteDetails: any;

  constructor(
    private pageService: PageService,
    private websiteService: WebsiteService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private progressServices: ProgressWidthService
  ) { }

  ngOnInit() {
    this.progressServices.setProgress('75%');
    this.websiteDetails = this.websiteService.getWebsite();
  }

  back() {
    this._location.back();
  }

  select(){
    console.log(this.aboutPage);
 
    const page = new Page(JSON.parse(JSON.stringify({
      website_id: this.websiteDetails.id,
      type: pageTypes.about,
      active: this.aboutPage
    })));
    console.log(page);
    this.pageService.store(page)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/website/help']);
        },
        error => {
          console.log(error);
        }
      )
  }

}
