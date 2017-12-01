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
import { FieldErrorDisplayComponent } from '../../shared/components/field-error-display/field-error-display.component';

// SHARED SERVICES
import { FormBuilderService } from '../../shared/services/form-builder.service';

// CATALOG COMPONENTS
import { TagsComponent } from './components/tags/tags.component';
import { AvailabilitiesComponent } from './components/availabilities/availabilities.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SpecsComponent } from './components/specs/specs.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';

// CATALOG SERVICES
import { TagService } from './services/tags.service';
import { AvailabilityService } from './services/availability.service';
import { CampaignService } from './services/campaign.service';
import { CategoryService } from './services/category.service';
import { FilterService } from './services/filter.service';
import { ProductService } from './services/product.service';
import { SpecsService } from './services/specs.service';

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
    FieldErrorDisplayComponent,
    AvailabilitiesComponent,
    FiltersComponent,
    SpecsComponent,
    CategoriesComponent,
    ProductsComponent,
    CampaignsComponent
  ],
  providers: [
    FormBuilderService,
    TagService,
    AvailabilityService,
    CampaignService,
    CategoryService,
    FilterService,
    ProductService,
    SpecsService
  ]
})
export class AdminModule { }
