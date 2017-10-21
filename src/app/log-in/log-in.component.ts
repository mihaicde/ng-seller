import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/User';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;
  myForm: FormGroup;
  // postsCol: AngularFirestoreCollection<Post>;
  // posts: Observable<Post[]>;

  constructor(public authService: AuthService, private afs: AngularFirestore, private router: Router) {}
    login() {
      this.authService.login(this.email, this.password);
      this.email = this.password = '';
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

    ngOnInit() {
      this.myForm = new FormGroup({
          email: new FormControl(null,
            [
              Validators.required,
              Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]),
          password: new FormControl(null, Validators.required)
      });
    }

}
