import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/User';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilderService } from '../shared/services/form-builder.service';

import { Notification } from '../shared/models/Notification';
import { NotificationService } from '../shared/services/notification.service';
import { NotificationComponent } from '../shared/components/notification/notification.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;

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
  }

  // login() {
  //   this.authService.login(this.email, this.password);
  // }

  reset() {
    this.loginForm.reset();
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
      this.reset();
    } else {
      this.formBuilderService.validateAllFormFields(this.loginForm);
    }
  }

  logout() {
    this.authService.logout();
  }
    // onSubmit() {
    //     const user = new User(this.myForm.value.email, this.myForm.value.password);
    //     this.authService.login(user.email, user.password)
    //         .subscribe(
    //             data => {
    //                 console.log(data.message);
    //                 localStorage.setItem('token', data.token);
    //                 localStorage.setItem('userId', data.userId);
    //                 this.router.navigateByUrl('/admin');
    //             },
    //             error => console.error(error)
    //         );
    //     this.myForm.reset();
    // }
}
