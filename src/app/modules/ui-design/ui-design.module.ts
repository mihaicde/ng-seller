import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorHandler } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { SharedModule } from '../shared/shared.module';

import { UiMainComponent } from './components/ui-main/ui-main.component';

import { UiNavComponent } from './components/ui-nav/ui-nav.component';
import { UiButtonsComponent } from './components/ui-buttons/ui-buttons.component';
import { UiPreloadersComponent } from './components/ui-preloaders/ui-preloaders.component';
import { UiDesignRoutingModule } from './ui-design-routing.module';
import { UiModalComponent } from './components/ui-modal//ui-modal.component';
import { UiNotificationsComponent } from './components/ui-notifications/ui-notifications.component';

// import { ModalComponent } from '../../shared/components/modal/modal.component';
// import { NotificationComponent } from '.././../shared/components/notification/notification.component';

// import { NotificationService } from '../../shared/services/notification.service';
// import { CustomErrorHandler } from '../../shared/services/custom-error-handler';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    UiDesignRoutingModule,
    SharedModule
  ],
  declarations: [
    UiMainComponent,
    UiNavComponent,
    UiButtonsComponent,
    UiPreloadersComponent,
    UiModalComponent,
    UiNotificationsComponent,
    // ModalComponent,
    // NotificationComponent
  ],
  providers: [
    // NotificationService,
    // { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
})

export class UiDesignModule { }
