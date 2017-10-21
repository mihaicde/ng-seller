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

import { NotificationService } from './shared/services/notification.service';
import { CustomErrorHandler } from './shared/services/custom-error-handler';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';

import { ParentComponent } from './parent/parent.component';

import { ModalComponent } from './shared/components/modal/modal.component';
import { CategoryComponent } from './category/category.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    GrowlModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    ParentComponent, // Just for testing the modal component
    ModalComponent,
    CategoryComponent,
    LogInComponent
  ],
  providers: [
    AuthService,
    NotificationService,
    { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
