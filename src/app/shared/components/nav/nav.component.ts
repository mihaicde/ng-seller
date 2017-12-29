import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { WebsiteService } from '../../../modules/admin/services/website.service';

import { User } from '../../../models/User';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  userDetails: any;
  websiteDetails: any;

  constructor(
    private authService: AuthService,
    private websiteService: WebsiteService
  ) { }

  ngOnInit() {
    this.userDetails = this.authService.getUser();
    this.websiteDetails = this.websiteService.getWebsite();
    console.log(this.websiteDetails);

  }

}
