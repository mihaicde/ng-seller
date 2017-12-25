import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { Website } from '../../../../models/Website';
import { AuthService } from '../../../../shared/services/auth.service';
import { WebsiteService } from '../../../../modules/admin/services/website.service';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';
import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-website-details',
  templateUrl: './website-details.component.html'
})
export class WebsiteDetailsComponent implements OnInit {

  siteType: string;
  websiteName: string;
  websiteId: number;
  userDetails: any;
  categories: string[] =
  [
    'Restaurant',
    'Imbracaminte',
    'Medical',
    'Electronice',
    'Travel',
    'Diferit'
  ];

  detailForm: FormGroup;

  constructor(
    private formBuilderService: FormBuilderService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private _location: Location,
    private websiteService: WebsiteService,
    private progressServices: ProgressWidthService
  ) { }

  reset() {
    this.detailForm.reset();
  }

  back() {
    this._location.back();
  }

  ngOnInit() {
    this.progressServices.setProgress('35%');
    this.userDetails = this.authService.getUser();
    console.log(this.userDetails);
    this.detailForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      domain: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
    this.route.params.subscribe( params => { 
      console.log(params.type);
      this.siteType = params.type;
    });
  }

  onSubmit () {
    if (this.detailForm.valid) {
      console.log(this.detailForm.value);
      const website = new Website( JSON.parse(JSON.stringify({
        name: this.detailForm.value.name,
        domain: this.detailForm.value.domain,
        type: this.siteType,
        category: this.detailForm.value.category,
        user_id: this.userDetails.id
      })));
      console.log(website);
      this.websiteService.store(website)
      .subscribe(
          data => {
            console.log(data.obj.name);
            this.websiteName = data.obj.name
            this.websiteId = data.obj.id
            localStorage.setItem('websiteName', data.obj.name);
            localStorage.setItem('websiteId', data.obj.id);
          },
          error => {
            console.log(error);
          }
      );
      this.router.navigate(['/website/home']);
      this.reset();
    }
    else {
      this.formBuilderService.validateAllFormFields(this.detailForm);
    }
  }

}
