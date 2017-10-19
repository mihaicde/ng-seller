import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LogInComponent } from './log-in/log-in.component';

import { CategoryComponent } from './category/category.component';

import { ModalComponent } from './shared/components/modal/modal.component'; // For test
// import { LoggedInGuard } from "./auth/singedin.guard";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  // { path: '', redirectTo: '/UI-design', pathMatch: 'full' },
  { path: 'test', component: ParentComponent },

  { path: 'login', component: LogInComponent },
  { path: 'category', component: CategoryComponent },

  { path: 'modal', component: ChildComponent }, // For test
  { path: 'ui', loadChildren: './modules/ui-design/ui-design.module#UiDesignModule' },
  // { path: 'admin', component: AdminComponent, loadChildren: './admin/admin.module#AdminModule', canActivate: [LoggedInGuard] }
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
