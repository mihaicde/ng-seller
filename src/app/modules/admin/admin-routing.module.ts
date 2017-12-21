import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';

// ADMIN COMPONENTS
import { WebsiteSideNavComponent } from './components/website-side-nav/website-side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SysconfigComponent } from './components/sysconfig/sysconfig.component';

// CATALOG
import { TagsComponent } from './components/tags/tags.component';
import { AvailabilitiesComponent } from './components/availabilities/availabilities.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SpecsComponent } from './components/specs/specs.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { WebsitesComponent } from './components/websites/websites.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'websites',
        component: WebsitesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'sysconfig',
        component: SysconfigComponent
      },
      {
        path: 'tags',
        component: TagsComponent
      },
      {
        path: 'availabilities',
        component: AvailabilitiesComponent
      },
      {
        path: 'filters',
        component: FiltersComponent
      },
      {
        path: 'specs',
        component: SpecsComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'campaigns',
        component: CampaignsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
