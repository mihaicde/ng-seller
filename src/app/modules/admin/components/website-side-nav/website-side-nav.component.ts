import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-website-side-nav',
  templateUrl: './website-side-nav.component.html',
  styleUrls: ['./website-side-nav.component.css']
})
export class WebsiteSideNavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

}
