import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { NavComponent } from '../../shared/components/nav/nav.component';
import { AdminSideNavComponent } from './components/admin-side-nav/admin-side-nav.component';
import { WebsiteSideNavComponent } from './components/website-side-nav/website-side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MainComponent } from './components/main/main.component';

// SERVICES
import { FormBuilderService } from './services/form-builder.service';

// CATALOG ITEMS
import { TagsComponent } from './components/tags/tags.component';
import { TagService } from './services/tags.service';
import { FieldErrorDisplayComponent } from '../../shared/components/field-error-display/field-error-display.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterializeModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    FieldErrorDisplayComponent
  ],
  declarations: [
    NavComponent,
    AdminSideNavComponent,
    WebsiteSideNavComponent,
    TopNavComponent,
    MainComponent,
    TagsComponent,
    FieldErrorDisplayComponent
  ],
  providers: [
    FormBuilderService,
    TagService
  ]
})
export class AdminModule { }
