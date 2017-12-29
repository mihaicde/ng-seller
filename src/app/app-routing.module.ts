import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { ModalComponent } from './shared/components/modal/modal.component'; // For test
import { LoggedInGuard } from './shared/guards/singedin.guard';

import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';


const APP_ROUTES: Routes = [
  { path: '', loadChildren: './modules/admin/admin.module#AdminModule', canActivate: [LoggedInGuard] },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'terms', component: TermsAndConditionsComponent },
  { path: 'policy', component: PrivacyPolicyComponent },
  { path: 'ui', loadChildren: './modules/ui-design/ui-design.module#UiDesignModule' },
  { path: 'website', loadChildren: './modules/website/website.module#WebsiteModule', canActivate: [LoggedInGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
