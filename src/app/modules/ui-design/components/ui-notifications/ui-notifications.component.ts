import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { Component, EventEmitter, ViewChild } from '@angular/core';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';

@Component({
  selector: 'app-ui-notifications',
  templateUrl: './ui-notifications.component.html',
  styleUrls: ['./ui-notifications.component.css']
})
export class UiNotificationsComponent {

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private notifyService: NotificationService
  ) { }

  success() {
    this.notifyService.success('Obiectul a fost creat');
  }

  danger() {
    this.notifyService.danger('Pericol de explozie');
  }

  info() {
    this.notifyService.info('O categorie a fost adaugata');
  }

  warning() {
    this.notifyService.warning('Licenta va expira in 30 de zile');
  }

  error() {
    this.notifyService.error('Data de autentificare sunt incorecte');
  }

  message() {
    this.notifyService.message('Mesaj nou primit');
  }

  email() {
    this.notifyService.email('Email nou primit');
  }

  throwNewError() {
    throw new Error('Eroare aruncata de angular');
  }

}
