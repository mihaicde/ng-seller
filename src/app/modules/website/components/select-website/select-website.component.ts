import { Component, OnInit } from '@angular/core';

import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-select-website',
  templateUrl: './select-website.component.html'
})

export class SelectWebsiteComponent implements OnInit {

  constructor(
    private progressServices: ProgressWidthService
  ) { }

  ngOnInit() {
    this.progressServices.setProgress('20%');
  }

}
