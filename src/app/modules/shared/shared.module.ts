import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { ModalComponent } from '../../shared/components/modal/modal.component';
import { NotificationComponent } from '.././../shared/components/notification/notification.component';

import { NotificationService } from '../../shared/services/notification.service';
import { CustomErrorHandler } from '../../shared/services/custom-error-handler';


@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [
    ModalComponent,
    NotificationComponent
  ],
  providers: [
    NotificationService,
    { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
  exports: [
    CommonModule,
    ModalComponent,
    NotificationComponent
  ]
})
export class SharedModule { }
