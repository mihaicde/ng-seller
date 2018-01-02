import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { Page } from '../../../../models/pages/Page';
import { HelpPage } from '../../../../models/pages/Help';
import { ContactPage } from '../../../../models/pages/Contact';
import { BaseContent } from '../../../../models/pages/BaseContent';

import { PageService } from '../../services/page.service';
import { WebsiteService } from '../../../admin/services/website.service';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';
import { ProgressWidthService } from '../../services/progress-width.service';

import { pageTypes } from '../../../../models/pages/PageType';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit {

  pagesForm: FormGroup;
  websiteDetails: any;

  constructor(
    private formBuilderService: FormBuilderService,
    private pageService: PageService,
    private websiteService: WebsiteService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private progressServices: ProgressWidthService
  ) { }

  ngOnInit() {
    this.progressServices.setProgress('90%');
    this.websiteDetails = this.websiteService.getWebsite();
    this.pagesForm = new FormGroup({
      instructions: new FormControl(true, Validators.required),
      returnPolicy: new FormControl(true, Validators.required),
      ordersPolicy: new FormControl(false, Validators.required),
      shipmentPolicy: new FormControl(false, Validators.required),
      complaints: new FormControl(true, Validators.required)
    });
  }

  reset() {
    this.pagesForm.reset();
  }

  back() {
    this._location.back();
  }

  onSubmit() {
    console.log(this.pagesForm.value);
    if(this.pagesForm.value) {
      const page = new Page(JSON.parse(JSON.stringify({
        website_id: this.websiteDetails.id,
        type: pageTypes.help,
        active: true,
        summary: JSON.stringify(new HelpPage(JSON.parse(JSON.stringify({
          active: true,
          instructions: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.instructions
          }))),
          returnPolicy: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.returnPolicy
          }))),
          ordersPolicy: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.ordersPolicy
          }))),
          shipmentPolicy: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.shipmentPolicy
          }))),
          complaints: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.complaints
          })))
        }))))})));
      console.log(page);
      this.pageService.store(page)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['/website/finish']);
          },
          error => {
            console.log(error);
          }
        )
    }
    // this.router.navigate(['/website/finish']);
  }

}
