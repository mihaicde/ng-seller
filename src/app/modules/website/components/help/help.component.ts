import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { HelpPage } from '../../../../models/pages/Help';
import { BaseContent } from '../../../../models/pages/BaseContent';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';
import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit {

  aboutPage: string;
  pagesForm: FormGroup;

  constructor(
    private formBuilderService: FormBuilderService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private progressServices: ProgressWidthService
  ) { }

  ngOnInit() {
    this.progressServices.setProgress('90%');
    this.pagesForm = new FormGroup({
      instructions: new FormControl(true, Validators.required),
      returnPolicy: new FormControl(true, Validators.required),
      ordersPolicy: new FormControl(false, Validators.required),
      shipmentPolicy: new FormControl(false, Validators.required),
      complaints: new FormControl(true, Validators.required)
    });
    this.route.params.subscribe( params => { 
      console.log(params.aboutPage);
      this.aboutPage = params.aboutPage;
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
    const helpPage = new HelpPage(JSON.parse(JSON.stringify({
      active: true,
      instructions: new BaseContent(JSON.parse(JSON.stringify({
        active: this.pagesForm.value.instructions,
      }))),
      returnPolicy: new BaseContent(JSON.parse(JSON.stringify({
        active: this.pagesForm.value.returnPolicy,
      }))),
      ordersPolicy: new BaseContent(JSON.parse(JSON.stringify({
        active: this.pagesForm.value.ordersPolicy,
        content: ''
      }))),
      shipmentPolicy: new BaseContent(JSON.parse(JSON.stringify({
        active: this.pagesForm.value.shipmentPolicy,
        content: ''
      }))),
      complaints: new BaseContent(JSON.parse(JSON.stringify({
        active: this.pagesForm.value.complaints,
        content: ''
      })))
    })));
    console.log(helpPage);
    this.router.navigate(['/website/finish']);
  }

}
