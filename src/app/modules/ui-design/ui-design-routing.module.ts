import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// UI - COMPONENTS
import { UiMainComponent } from './components/ui-main/ui-main.component';
import { UiNavComponent } from './components/ui-nav/ui-nav.component';
import { UiButtonsComponent } from './components/ui-buttons/ui-buttons.component';
import { UiPreloadersComponent } from './components/ui-preloaders/ui-preloaders.component';
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
import { UiTabsComponent } from './components/ui-tabs/ui-tabs.component';
import { UiTextDividerComponent } from './components/ui-text-divider/ui-text-divider.component';
import { UiJumbotronComponent } from './components/ui-jumbotron/ui-jumbotron.component';

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
import { UiReviewsComponent } from './ui-pages/ui-reviews/ui-reviews.component';
import { UiPricingComponent } from './ui-pages/ui-pricing/ui-pricing.component';
import { UiCalendarComponent } from './ui-pages/ui-calendar/ui-calendar.component';
import { UiAlbumComponent } from './ui-pages/ui-album/ui-album.component';
import { UiPortfolioComponent } from './ui-pages/ui-portfolio/ui-portfolio.component';

// UI - TEMPLATES
import { ParallaxTemplateComponent } from './ui-templates/parallax-template/parallax-template.component';

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
      // Components
      {
        path: 'buttons',
        component: UiButtonsComponent
      },
      {
        path: 'jumbotron',
        component: UiJumbotronComponent
      },
      {
        path: 'calendar',
        component: UiCalendarComponent
      },
      {
        path: 'album',
        component: UiAlbumComponent
      },
      {
        path: 'portfolio',
        component: UiPortfolioComponent
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
      {
        path: 'icon-block',
        component: UiIconBlockComponent
      },
      {
        path: 'parallax',
        component: UiParallaxComponent
      },
      {
        path: 'carousel',
        component: UiCarouselComponent
      },
      {
        path: 'slider',
        component: UiSliderComponent
      },
      {
        path: 'cards',
        component: UiCardsComponent
      },
      {
        path: 'forms',
        component: UiFormsComponent
      },
      {
        path: 'collapsible',
        component: UiCollapsibleComponent
      },
      {
        path: 'media',
        component: UiMediaComponent
      },
      {
        path: 'tabs',
        component: UiTabsComponent
      },
      {
        path: 'tooltip',
        component: UiTooltipsComponent
      },
      {
        path: 'text-divider',
        component: UiTextDividerComponent
      },
      {
        path: 'colors',
        component: UiColorsComponent
      },
      // Pages
      {
        path: 'ui-home',
        component: UiHomeComponent
      },
      {
        path: 'ui-about',
        component: UiAboutComponent
      },
      {
        path: 'ui-store',
        component: UiStoreComponent
      },
      {
        path: 'ui-contact',
        component: UiContactComponent
      },
      {
        path: 'ui-showcase',
        component: UiShowcaseComponent
      },
      {
        path: 'ui-help',
        component: UiHelpComponent
      },
      {
        path: 'ui-footer',
        component: UiFooterComponent
      },
      {
        path: 'ui-navs',
        component: UiNavsComponent
      },
      {
        path: 'ui-pricing',
        component: UiPricingComponent
      },
      {
        path: 'ui-reviews',
        component: UiReviewsComponent
      },
      {
        path: 'ui-blog',
        component: UiBlogComponent
      },
    ]
  },
  // Templates
  {
    path: 'ui-parallax-template',
    component: ParallaxTemplateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(uiRoutes)],
  exports: [RouterModule]
})
export class UiDesignRoutingModule { }
