import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiMainComponent } from './components/ui-main/ui-main.component';
import { UiNavComponent } from './components/ui-nav/ui-nav.component';
import { UiButtonsComponent } from './components/ui-buttons/ui-buttons.component';
import { UiPreloadersComponent } from './components/ui-preloaders/ui-preloaders.component';
import { UiModalComponent } from './components/ui-modal//ui-modal.component';
import { UiNotificationsComponent } from './components/ui-notifications/ui-notifications.component';

const uiRoutes: Routes = [
    {
     path: '',
     component: UiMainComponent,
     children: [
      {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full',
      },
      {
        path: 'buttons',
        component: UiButtonsComponent
      },
      {
        path: 'preloaders',
        component: UiPreloadersComponent
      },
      {
        path: 'modals',
        component: UiModalComponent
      },
      {
        path: 'notifications',
        component: UiNotificationsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(uiRoutes)],
  exports: [RouterModule]
})
export class UiDesignRoutingModule { }
