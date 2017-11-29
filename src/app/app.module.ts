import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import my other modules so the components added there would work globally
import { UiDesignModule } from './modules/ui-design/ui-design.module';
import { AdminModule } from './modules/admin/admin.module';

import { AuthService } from './shared/services/auth.service';

import { ErrorHandler } from '@angular/core';

import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';

// import { ModalComponent } from './shared/components/modal/modal.component';
// import { NotificationComponent } from './shared/components/notification/notification.component';
// import { CustomErrorHandler } from './shared/services/custom-error-handler';
// import { NotificationService } from './shared/services/notification.service';

import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { FieldErrorDisplayComponent } from './shared/components/field-error-display/field-error-display.component';


@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    AppRoutingModule,
    AdminModule,
    UiDesignModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    PageNotFoundComponent,
    // FieldErrorDisplayComponent
  ],
  providers: [
    AuthService,
    // NotificationService,
    // { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
