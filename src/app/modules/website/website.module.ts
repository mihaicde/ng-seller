import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';

import { WebsiteMainComponent } from './components/website-main/website-main.component';
import { HelpUsComponent } from './components/help-us/help-us.component';
import { SelectWebsiteComponent } from './components/select-website/select-website.component';
import { WebsiteDetailsComponent } from './components/website-details/website-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { WebsiteFinishComponent } from './components/website-finish/website-finish.component';

import { ProgressWidthService } from './services/progress-width.service';

@NgModule({
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ],
  declarations: [
    WebsiteMainComponent,
    HelpUsComponent,
    SelectWebsiteComponent,
    WebsiteDetailsComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutUsPageComponent,
    WebsiteFinishComponent
  ],
  providers: [
    ProgressWidthService
  ]
})
export class WebsiteModule { }
