import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html'
})
export class AboutUsPageComponent implements OnInit {

  constructor(
    private progressServices: ProgressWidthService
  ) { }

  ngOnInit() {
    this.progressServices.setProgress('85%');
  }

}
