import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { AngularFireModule } from 'angularfire2';
// import { environment } from '../environments/environment';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './shared/services/auth.service';

import { ErrorHandler } from '@angular/core';

import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';

import { GrowlModule } from 'primeng/primeng';

// Imports for loading & configuring the in-memory web api
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; // Do i need this?
import { InMemoryDataService } from './shared/services/in-memory-data.service';

// import { NotificationService } from './shared/services/notification.service';
// import { CustomErrorHandler } from './shared/services/custom-error-handler';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';

// import { ModalComponent } from './shared/components/modal/modal.component';

import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    GrowlModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    // ModalComponent,
    LogInComponent,
    RegisterComponent,
    PageNotFoundComponent,
    // NotificationComponent
  ],
  providers: [
    AuthService,
    // NotificationService,
    // { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
