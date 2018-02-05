import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Notification } from '../../models/Notification';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';

import { NotificationService } from '../../services/notification.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnDestroy, OnInit {
  // private alive: boolean = true; // will use Subject instead
  private shouldUnsubscribe: Subject<any> = new Subject<any>();

  icon_1 =        '<i class="material-icons print iToast">';
  icon_2 =        '</i>';
  div_row =       '<div class="row valign-wrapper">';
  div_close =       '</div>';
  col =           '<div class="col">';
  span_type =     '<span class="center-align notify_type">';
  span_title =    '<span class="center-align notify_title">';
  span_desc =     '<span class="center-align notify_desc">';
  span_close =    '</span>';

  // Message = '<br/><br/><span>Your print job was sent<span>';
  // toast2 = this.Icon + this.Message ;

  notification: Notification;

  globalActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private notifyService: NotificationService) { }

  ngOnInit() {
    this.notifyService.notifyOccurred
    // .takeWhile(() => this.alive)
    .takeUntil(this.shouldUnsubscribe)
    .subscribe(
      (notification: Notification) => {
          this.notification = notification;
          console.log(notification);
          this.globalActions.emit('toast');
      }
    );
  }

  ngOnDestroy() {
    // this.notifyService.notifyOccurred.unsubscribe();
    // this.alive = false;
    this.shouldUnsubscribe.next();
    this.shouldUnsubscribe.complete();
  }

}
