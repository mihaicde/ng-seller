import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ModalComponent } from './shared/components/modal/modal.component'; // For test
import { LoggedInGuard } from './shared/guards/singedin.guard';

import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const APP_ROUTES: Routes = [
  { path: '', loadChildren: './modules/admin/admin.module#AdminModule', canActivate: [LoggedInGuard] },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'terms', component: TermsAndConditionsComponent },
  { path: 'policy', component: PrivacyPolicyComponent },
  { path: 'ui', loadChildren: './modules/ui-design/ui-design.module#UiDesignModule' },
  { path: 'website', loadChildren: './modules/website/website.module#WebsiteModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
