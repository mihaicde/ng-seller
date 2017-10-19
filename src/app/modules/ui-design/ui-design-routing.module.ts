import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiMainComponent } from './components/ui-main/ui-main.component';
import { UiNavComponent } from './components/ui-nav/ui-nav.component';
import { UiButtonsComponent } from './components/ui-buttons/ui-buttons.component';
import { UiPreloadersComponent } from './components/ui-preloaders/ui-preloaders.component';

const uiRoutes: Routes = [
    { path: '', component: UiMainComponent },
    {
     path: '',
     component: UiMainComponent,
     children: [
      {
        path: 'buttons',
        component: UiButtonsComponent
      },
      {
        path: 'preloaders',
        component: UiPreloadersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(uiRoutes)],
  exports: [RouterModule]
})
export class UiDesignRoutingModule { }
