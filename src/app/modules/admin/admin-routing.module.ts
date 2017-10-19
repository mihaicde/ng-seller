import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminSideNavComponent } from './components/admin-side-nav/admin-side-nav.component';
import { WebsiteSideNavComponent } from './components/website-side-nav/website-side-nav.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
