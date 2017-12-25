import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';
import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html'
})

export class AboutUsPageComponent implements OnInit {

  aboutPage = 'true';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private progressServices: ProgressWidthService
  ) { }

  ngOnInit() {
    this.progressServices.setProgress('75%');
  }

  back() {
    this._location.back();
  }

  select(){
    console.log(this.aboutPage);
  }

}
