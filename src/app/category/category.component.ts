import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private notification: NotificationService) {
  }

  throwError() {
    this.notification.success('cad');
    throw new Error('crazy nightmare');
  }

  getMessages(): Message[] {
      return this.notification.message;
  }

  ngOnInit() {
  }

}
