import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/User';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilderService } from '../shared/services/form-builder.service';

import { ModalComponent } from '../shared/components/modal/modal.component';
import { Notification } from '../shared/models/Notification';
import { NotificationService } from '../shared/services/notification.service';
import { NotificationComponent } from '../shared/components/notification/notification.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html'
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  resetForm: FormGroup;

  @ViewChild('modal')
  childComponent: ModalComponent;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor (
    private formBuilderService: FormBuilderService,
    public authService: AuthService,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, Validators.required)
    });

    this.resetForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
    })

    this.childComponent.title = 'Forgot Your Password?';
  }

  reset(form: any) {
    form.reset();
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('form submitted');
      const user = new User(this.loginForm.value);
      console.log(user);
      this.authService.auth(user, 'login')
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
      this.reset(this.loginForm);
    } else {
      this.formBuilderService.validateAllFormFields(this.loginForm);
    }
  }

  logout() {
    this.authService.logout();
  }

  openModalCrud() {
    this.childComponent.openModal();
  }

  closeModalCrud() {
    this.childComponent.closeModal();
  }

  forgotPassword() {
    console.log('password reset');
    if (this.resetForm.valid) {
      console.log(this.resetForm.value);
      this.authService.resetPassword(this.resetForm.value);
      this.reset(this.resetForm);
    } else {
      this.formBuilderService.validateAllFormFields(this.resetForm);
    }
  }

}
