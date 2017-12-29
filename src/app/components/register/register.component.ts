import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/User';
import { AuthService } from '../../shared/services/auth/auth.service';
import { FormBuilderService } from '../../shared/services/form-builder.service';

import { Notification } from '../../shared/models/Notification';
import { NotificationService } from '../../shared/services/notification.service';
import { NotificationComponent } from '../../shared/components/notification/notification.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private authService: AuthService,
    private router: Router,
    private notifyService: NotificationService
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  reset() {
    this.registerForm.reset();
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('form submitted');
      // console.log(this.registerForm.value);
      const user = new User(this.registerForm.value);
      console.log(user);
      this.authService.auth(user, 'register')
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error[0].message);
          this.notifyService.error(error[0].message);
        }
      );
      this.reset();
    } else {
      this.formBuilderService.validateAllFormFields(this.registerForm);
    }
  }

}
