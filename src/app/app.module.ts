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

@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    GrowlModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
