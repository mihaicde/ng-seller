import { Component, OnInit } from '@angular/core';

import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-website-details',
  templateUrl: './website-details.component.html'
})
export class WebsiteDetailsComponent implements OnInit {

  constructor(
    private progressServices: ProgressWidthService
  ) { }

  ngOnInit() {
    this.progressServices.setProgress('35%');
  }

}
