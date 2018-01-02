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
import { FormBuilderService } from '../../../../shared/services/form-builder.service';
import { ProgressWidthService } from '../../services/progress-width.service';

import { pageTypes } from '../../../../models/pages/PageType';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent implements OnInit {

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
    this.progressServices.setProgress('70%');
    this.websiteDetails = this.websiteService.getWebsite();
    this.pagesForm = new FormGroup({
      contactForm: new FormControl(true, Validators.required),
      orderSchedule: new FormControl(true, Validators.required),
      serviceSchedule: new FormControl(false, Validators.required),
      showroomSchedule: new FormControl(false, Validators.required),
      location: new FormControl(true, Validators.required),
      maps: new FormControl(false, Validators.required),
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
        type: pageTypes.contact,
        active: true,
        summary: JSON.stringify(new ContactPage(JSON.parse(JSON.stringify({
          active: true,
          contactForm: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.contactForm,
          }))),
          orderSchedule: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.orderSchedule,
          }))),
          serviceSchedule: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.serviceSchedule,
          }))),
          showroomSchedule: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.showroomSchedule,
          }))),
          location: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.location,
          }))),
          maps: new BaseContent(JSON.parse(JSON.stringify({
            active: this.pagesForm.value.maps,
          })))
        }))))})));
      console.log(page);
      this.pageService.store(page)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['/website/about']);
          },
          error => {
            console.log(error);
          }
        )
      // this.reset();
    } 
  }

}
