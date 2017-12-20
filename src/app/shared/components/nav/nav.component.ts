import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { User } from '../../../models/User';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userDetails: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userDetails = this.authService.getUser();
    console.log(this.userDetails);

  }

}
