import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { User } from '../../models/User';

@Injectable()
export class AuthService {

  private loggedIn = false;
  protected link = 'http://localhost:5555/';

  constructor(
    private http: Http,
    private router: Router) {
      this.loggedIn = !!localStorage.getItem('token');
    }

  auth (user: User, method) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.link + method, body, {headers: headers})
        .map((response: Response) => {
          const res = response.json();
          console.log(res);
          if (res.token) {
            console.log(res.token.token);
            localStorage.setItem('token', res.token.token);
            this.loggedIn = true;
            return res;
          }
        })
        .catch((err: Response) => {
            console.log('eroare la serviciu');
            console.log(err);
            return Observable.throw(err.json());
        });
  }

  login(email: string, password: string) {
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    // verify if user is logedIn
    if (localStorage.getItem('token') !== null ) {
      // true
      return localStorage.getItem('token') !== null;
    } else {
      // false
      window.alert('Forbidden access! Please log in!');
      this.router.navigateByUrl('/login');
      return localStorage.getItem('token') !== null;
    }
  }
}
