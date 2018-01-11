import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebsiteMainComponent } from './components/website-main/website-main.component';
import { HelpUsComponent } from './components/help-us/help-us.component';
import { SelectWebsiteComponent } from './components/select-website/select-website.component';
import { WebsiteDetailsComponent } from './components/website-details/website-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { HelpComponent } from './components/help/help.component';
import { WebsiteFinishComponent } from './components/website-finish/website-finish.component';

const routes: Routes = [
    {
      path: '',
      component: WebsiteMainComponent,
      children: [
      {
        path: '',
        redirectTo: 'helpUs',
        pathMatch: 'full',
      },
      {
        path: 'helpUs',
        component: HelpUsComponent,
        data: { state: 'helpUs'}
      },
      {
        path: 'select',
        component: SelectWebsiteComponent,
        data: { state: 'select'}
      },
      {
        path: 'details/:type',
        component: WebsiteDetailsComponent,
        data: { state: 'details'}
      },
      {
        path: 'home',
        component: HomePageComponent,
        data: { state: 'home'}
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        data: { state: 'contact'}
      },
      {
        path: 'about',
        component: AboutUsPageComponent,
        data: { state: 'about'}
      },
      {
        path: 'help',
        component: HelpComponent,
        data: { state: 'help'}
      },
      {
        path: 'finish',
        component: WebsiteFinishComponent,
        data: { state: 'finish'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
