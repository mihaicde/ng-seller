import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

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
    this.router.navigate(['/website/finish']);
  }

}
