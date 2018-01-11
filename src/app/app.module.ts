import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routerTransition } from './utils/router.animations';

// import my other modules so the components added there would work globally
import { UiDesignModule } from './modules/ui-design/ui-design.module';
import { AdminModule } from './modules/admin/admin.module';
import { WebsiteModule } from './modules/website/website.module';
import { SharedModule } from './modules/shared/shared.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/services/auth/token.interceptor';
import { JwtInterceptor } from './shared/services/auth/jwt.interceptor';
import { AuthService } from './shared/services/auth/auth.service';

import { ErrorHandler } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';

import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FormBuilderService } from './shared/services/form-builder.service';
import { LoggedInGuard } from './shared/guards/singedin.guard';

import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    FormBuilderService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
