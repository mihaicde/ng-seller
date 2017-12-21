import { Component, OnInit } from '@angular/core';

import { ProgressWidthService } from '../../services/progress-width.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent implements OnInit {

  constructor(
    private progressServices: ProgressWidthService
  ) { }

  ngOnInit() {
    this.progressServices.setProgress('70%');
  }

}
