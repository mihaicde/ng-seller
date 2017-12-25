import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';

import { WebsiteRoutingModule } from './website-routing.module';
import { MaterializeModule } from 'angular2-materialize';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { WebsiteMainComponent } from './components/website-main/website-main.component';
import { HelpUsComponent } from './components/help-us/help-us.component';
import { SelectWebsiteComponent } from './components/select-website/select-website.component';
import { WebsiteDetailsComponent } from './components/website-details/website-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { HelpComponent } from './components/help/help.component';
import { WebsiteFinishComponent } from './components/website-finish/website-finish.component';

// SHARED SERVICES
import { FormBuilderService } from '../../shared/services/form-builder.service';

import { ProgressWidthService } from './services/progress-width.service';

@NgModule({
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    WebsiteMainComponent,
    HelpUsComponent,
    SelectWebsiteComponent,
    WebsiteDetailsComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutUsPageComponent,
    HelpComponent,
    WebsiteFinishComponent
  ],
  providers: [
    FormBuilderService,
    ProgressWidthService
  ]
})
export class WebsiteModule { }
