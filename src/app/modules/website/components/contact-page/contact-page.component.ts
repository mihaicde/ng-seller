import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { ContactPage } from '../../../../models/pages/Contact';
import { BaseContent } from '../../../../models/pages/BaseContent';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';
import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent implements OnInit {

  homePage: string;
  pagesForm: FormGroup;

  constructor(
    private formBuilderService: FormBuilderService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private progressServices: ProgressWidthService
  ) { }

  ngOnInit() {
    this.progressServices.setProgress('70%');
    this.pagesForm = new FormGroup({
      contactForm: new FormControl(true, Validators.required),
      orderSchedule: new FormControl(true, Validators.required),
      serviceSchedule: new FormControl(false, Validators.required),
      showroomSchedule: new FormControl(false, Validators.required),
      location: new FormControl(true, Validators.required),
      maps: new FormControl(false, Validators.required),
    });
    this.route.params.subscribe( params => { 
      console.log(params.homePage);
      this.homePage = params.homePage;
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
    const contactPage = new ContactPage(JSON.parse(JSON.stringify({
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
    })));
    console.log(contactPage);
    this.router.navigate(['/website/about']);
  }

}
