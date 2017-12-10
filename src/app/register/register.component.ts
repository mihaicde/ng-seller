import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/User';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilderService } from '../shared/services/form-builder.service';
// import { Notification } from '../shared/models/Notification';
// import { NotificationService } from '../shared/services/notification.service';
// import { NotificationComponent } from '../shared/components/notification/notification.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  // @ViewChild('toast')
  // notificationComp: NotificationComponent;
  registerForm: FormGroup;

  constructor(
    private formBuilderService: FormBuilderService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, Validators.required),
      role: new FormControl('Admin')
    });
  }

  reset() {
    this.registerForm.reset();
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('form submitted');
      // console.log(this.registerForm.value);
      this.registerForm.patchValue({
        role: 'Admin'
      });
      const user = new User(this.registerForm.value);
      console.log(user);
      this.authService.auth(user, 'register')
      .subscribe(
          data => console.log(data),
          error => console.log(error)
      );
      this.reset();
    } else {
      this.formBuilderService.validateAllFormFields(this.registerForm);
    }
  }

}
