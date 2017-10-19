import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

    constructor(
      private firebaseAuth: AngularFireAuth,
      private http: Http,
      private router: Router) {
      this.user = firebaseAuth.authState;
    }

    signup(email: string, password: string) {
      this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Success!', value);
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }

    login(email: string, password: string) {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }

    logout() {
      this.firebaseAuth
        .auth
        .signOut();
    }

    isLoggedIn() {
      // verify if user is logedIn
      if (localStorage.getItem('token') !== null ) {
        //true
        return localStorage.getItem('token') !== null;
      } else {
        //false
        window.alert('Forbidden access! Please log in!');
        this.router.navigateByUrl('/');
        return localStorage.getItem('token') !== null;
      }
    }
}
