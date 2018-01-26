import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorHandler } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../shared/shared.module';

import { UiMainComponent } from './components/ui-main/ui-main.component';

// UI - COMPONENTS
import { UiNavComponent } from './components/ui-nav/ui-nav.component';
import { UiButtonsComponent } from './components/ui-buttons/ui-buttons.component';
import { UiPreloadersComponent } from './components/ui-preloaders/ui-preloaders.component';
import { UiDesignRoutingModule } from './ui-design-routing.module';
import { UiModalComponent } from './components/ui-modal//ui-modal.component';
import { UiNotificationsComponent } from './components/ui-notifications/ui-notifications.component';
import { UiIconBlockComponent } from './components/ui-icon-block/ui-icon-block.component';
import { UiParallaxComponent } from './components/ui-parallax/ui-parallax.component';
import { UiCarouselComponent } from './components/ui-carousel/ui-carousel.component';
import { UiSliderComponent } from './components/ui-slider/ui-slider.component';
import { UiCardsComponent } from './components/ui-cards/ui-cards.component';
import { UiFormsComponent } from './components/ui-forms/ui-forms.component';
import { UiCollapsibleComponent } from './components/ui-collapsible/ui-collapsible.component';
import { UiMediaComponent } from './components/ui-media/ui-media.component';
import { UiTooltipsComponent } from './components/ui-tooltips/ui-tooltips.component';
import { UiColorsComponent } from './components/ui-colors/ui-colors.component';


// UI - PAGES
import { UiHomeComponent } from './ui-pages/ui-home/ui-home.component';
import { UiAboutComponent } from './ui-pages/ui-about/ui-about.component';
import { UiStoreComponent } from './ui-pages/ui-store/ui-store.component';
import { UiContactComponent } from './ui-pages/ui-contact/ui-contact.component';
import { UiShowcaseComponent } from './ui-pages/ui-showcase/ui-showcase.component';
import { UiHelpComponent } from './ui-pages/ui-help/ui-help.component';
import { UiFooterComponent } from './ui-pages/ui-footer/ui-footer.component';
import { UiNavsComponent } from './ui-pages/ui-navs/ui-navs.component';
import { UiBlogComponent } from './ui-pages/ui-blog/ui-blog.component';

// UI - TEMPLATES
import { ParallaxTemplateComponent } from './ui-templates/parallax-template/parallax-template.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    UiDesignRoutingModule,
    SharedModule,
    AgmCoreModule
  ],
  declarations: [
    UiMainComponent,
    UiNavComponent,
    UiButtonsComponent,
    UiPreloadersComponent,
    UiModalComponent,
    UiNotificationsComponent,
    UiIconBlockComponent,
    UiParallaxComponent,
    UiCarouselComponent,
    UiSliderComponent,
    UiCardsComponent,
    UiFormsComponent,
    UiCollapsibleComponent,
    UiMediaComponent,
    UiTooltipsComponent,
    UiColorsComponent,
    UiHomeComponent,
    UiAboutComponent,
    UiStoreComponent,
    UiContactComponent,
    UiShowcaseComponent,
    UiHelpComponent,
    UiFooterComponent,
    UiNavsComponent,
    UiBlogComponent,
    ParallaxTemplateComponent
  ],
  providers: [
    // NotificationService,
    // { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
})

export class UiDesignModule { }
