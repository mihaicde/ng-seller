import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { NavComponent } from '../../shared/components/nav/nav.component';
import { AdminSideNavComponent } from './components/admin-side-nav/admin-side-nav.component';
import { WebsiteSideNavComponent } from './components/website-side-nav/website-side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MainComponent } from './components/main/main.component';

// import { ModalComponent } from '../../shared/components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterializeModule
  ],
  declarations: [
    NavComponent,
    AdminSideNavComponent,
    WebsiteSideNavComponent,
    TopNavComponent,
    MainComponent,
    // ModalComponent
  ],
})
export class AdminModule { }
