import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';
import { Notification } from '../models/Notification';

@Injectable()
export class NotificationService {
  notifyOccurred = new EventEmitter<Notification>();

  constructor() {}


  success(message: string) {
    const notificationData = new Notification(message, 'Success', 'check', 'green');
    this.notifyOccurred.emit(notificationData);
  }

  info(message: string) {
    const notificationData = new Notification(message, 'Info', 'info', 'cyan');
    this.notifyOccurred.emit(notificationData);
  }

  warning(message: string) {
    const notificationData = new Notification(message, 'Warning', 'warning', 'amber');
    this.notifyOccurred.emit(notificationData);
  }

  danger(message: string) {
    const notificationData = new Notification(message, 'Danger', 'remove_circle', 'pink');
    this.notifyOccurred.emit(notificationData);
  }

  error(message: string) {
    const notificationData = new Notification(message, 'Error', 'highlight_off', 'materialize-red');
    this.notifyOccurred.emit(notificationData);
  }

  message(message: string) {
    const notificationData = new Notification(message, 'Message', 'message', 'purple');
    this.notifyOccurred.emit(notificationData);
  }

  email(message: string) {
    const notificationData = new Notification(message, 'Email', 'email', 'teal');
    this.notifyOccurred.emit(notificationData);
  }

}
