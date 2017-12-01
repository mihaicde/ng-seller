import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSideNavComponent } from './components/admin-side-nav/admin-side-nav.component';
import { WebsiteSideNavComponent } from './components/website-side-nav/website-side-nav.component';
import { MainComponent } from './components/main/main.component';

import { TagsComponent } from './components/tags/tags.component';
import { AvailabilitiesComponent } from './components/availabilities/availabilities.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SpecsComponent } from './components/specs/specs.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    {
      path: '',
      component: MainComponent,
      children: [
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
        path: 'producs',
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
