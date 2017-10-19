import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.css']
})
export class AdminSideNavComponent implements OnInit {

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
