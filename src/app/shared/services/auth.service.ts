import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { JwtHelper} from 'angular2-jwt';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { User } from '../../models/User';

@Injectable()
export class AuthService {

  private loggedIn = false;
  protected link = 'http://localhost:5555/';
  private jwtHelper: JwtHelper = new JwtHelper();

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
            const token = res.token.token;
            console.log(
              this.jwtHelper.decodeToken(token),
              this.jwtHelper.getTokenExpirationDate(token),
              this.jwtHelper.isTokenExpired(token)
            );
            const userDetails = this.jwtHelper.decodeToken(token).data;
            const issuedAt = this.jwtHelper.decodeToken(token).iat;
            const exp = this.jwtHelper.decodeToken(token).exp;
            localStorage.setItem('token', res.token.token);
            localStorage.setItem('refreshToken', res.token.refreshToken);
            localStorage.setItem('userDetails', userDetails);
            localStorage.setItem('exp', exp);
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
