import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { ModalComponent } from '../../shared/components/modal/modal.component';
import { NotificationComponent } from '../../shared/components/notification/notification.component';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';

import { NotificationService } from '../../shared/services/notification.service';
import { CustomErrorHandler } from '../../shared/services/custom-error-handler';

import { FieldErrorDisplayComponent } from '../../shared/components/field-error-display/field-error-display.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    RouterModule
  ],
  declarations: [
    ModalComponent,
    NotificationComponent,
    CarouselComponent,
    FieldErrorDisplayComponent
  ],
  providers: [
    NotificationService,
    { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
  exports: [
    CommonModule,
    ModalComponent,
    NotificationComponent,
    CarouselComponent,
    FieldErrorDisplayComponent
  ]
})
export class SharedModule { }
