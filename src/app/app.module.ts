import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import my other modules so the components added there would work globally
import { UiDesignModule } from './modules/ui-design/ui-design.module';
import { AdminModule } from './modules/admin/admin.module';
import { WebsiteModule } from './modules/website/website.module';
import { SharedModule } from './modules/shared/shared.module';

import { AuthService } from './shared/services/auth.service';

import { ErrorHandler } from '@angular/core';

import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';

import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FormBuilderService } from './shared/services/form-builder.service';
import { LoggedInGuard } from './shared/guards/singedin.guard';

import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    AppRoutingModule,
    AdminModule,
    WebsiteModule,
    SharedModule,
    UiDesignModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    PageNotFoundComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent
  ],
  providers: [
    AuthService,
    FormBuilderService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
