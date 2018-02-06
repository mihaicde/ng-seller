import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { ModalComponent } from '../../shared/components/modal/modal.component';
import { NotificationComponent } from '../../shared/components/notification/notification.component';

// SECTIONS
import { CarouselComponent } from '../../shared/components/sections/carousel/carousel.component';
import { IconBlockComponent } from '../../shared/components/sections/icon-block/icon-block.component';
import { SliderComponent } from '../../shared/components/sections/slider/slider.component';
import { ParallaxComponent } from '../../shared/components/sections/parallax/parallax.component';
import { CardComponent } from '../../shared/components/sections/card/card.component';
import { NavBarComponent } from '../../shared/components/sections/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/sections/footer/footer.component';
import { SectionTitleComponent } from '../../shared/components/sections/section-title/section-title.component';

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
    FieldErrorDisplayComponent,
    IconBlockComponent,
    SliderComponent,
    ParallaxComponent,
    CardComponent,
    NavBarComponent,
    FooterComponent,
    SectionTitleComponent
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
    FieldErrorDisplayComponent,
    IconBlockComponent,
    SliderComponent,
    ParallaxComponent,
    CardComponent,
    NavBarComponent,
    FooterComponent,
    SectionTitleComponent
  ]
})
export class SharedModule { }
