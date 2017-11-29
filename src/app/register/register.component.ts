import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/User';
import { AuthService } from '../shared/services/auth.service';
// import { Notification } from '../shared/models/Notification';
// import { NotificationService } from '../shared/services/notification.service';
// import { NotificationComponent } from '../shared/components/notification/notification.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ViewChild('toast')
  // notificationComp: NotificationComponent;
  registerForm: FormGroup;

  constructor(private authService: AuthService) { }

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

  isFieldValid(field: string) {
    return !this.registerForm.get(field).valid && this.registerForm.get(field).touched;
  }


  onRegister() {
    if (this.registerForm.valid) {
      console.log('form submitted');
      const user = new User(this.registerForm.value);
      this.authService.signup(user)
      .subscribe(
          data => console.log(data),
          error => console.log(error)
      );
      this.reset();
    } else {
      this.validateAllFormFields(this.registerForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset() {
    this.registerForm.reset();
  }

}
