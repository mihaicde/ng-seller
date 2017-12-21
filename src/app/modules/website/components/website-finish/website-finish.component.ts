import { Component, OnInit } from '@angular/core';

import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-website-finish',
  templateUrl: './website-finish.component.html'
})
export class WebsiteFinishComponent implements OnInit {

  constructor(
    private progressServices: ProgressWidthService
  ) { }

  ngOnInit() {
    this.progressServices.setProgress('100%');
  }

}
