import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'angular2-materialize';

import { UiMainComponent } from './components/ui-main/ui-main.component';

import { UiNavComponent } from './components/ui-nav/ui-nav.component';
import { UiButtonsComponent } from './components/ui-buttons/ui-buttons.component';
import { UiPreloadersComponent } from './components/ui-preloaders/ui-preloaders.component';
import { UiDesignRoutingModule } from './ui-design-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    UiDesignRoutingModule
  ],
  declarations: [
    UiMainComponent,
    UiNavComponent,
    UiButtonsComponent,
    UiPreloadersComponent
  ]
})

export class UiDesignModule { }
