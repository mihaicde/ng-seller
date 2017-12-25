import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  
  homePage = 'ecommerce';

  constructor(
    private progressServices: ProgressWidthService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  
  ngOnInit() {
    this.progressServices.setProgress('55%');
  }

  select(){
    console.log(this.homePage);
  }
}
