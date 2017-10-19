import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './auth.service';

import { ErrorHandler } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { GrowlModule } from 'primeng/primeng';

import { NotificationService } from './shared/services/notification.service';
import { CustomErrorHandler } from './shared/services/custom-error-handler';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';

import { AuthComponent } from './shared/components/auth/auth.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { CategoryComponent } from './category/category.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBxSKTUuyNFFiHWrmTp_AsLsDsFJhtMp74',
  authDomain: 'denopi-test.firebaseapp.com',
  databaseURL: 'https://denopi-test.firebaseio.com',
  projectId: 'denopi-test',
  storageBucket: 'denopi-test.appspot.com',
  messagingSenderId: '539751143361'
};

@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    GrowlModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    ParentComponent,
    ChildComponent,
    ModalComponent,
    CategoryComponent
  ],
<<<<<<< Updated upstream
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
=======
  providers: [
    NotificationService,
    { provide: ErrorHandler, useClass: CustomErrorHandler } // overrride default error handler
  ],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
