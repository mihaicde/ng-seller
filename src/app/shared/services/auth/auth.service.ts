import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';
import { Router } from '@angular/router';
import { JwtHelper} from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { User } from '../../../models/User';

@Injectable()
export class AuthService {

  private loggedIn = false;
  public link = 'http://localhost:5555/';
  private jwtHelper: JwtHelper = new JwtHelper();
  private userDetails = [];

  cachedRequests: Array<Request> = [];

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

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

            this.userDetails = this.jwtHelper.decodeToken(token).data;
            const userName = this.jwtHelper.decodeToken(token).data.name;
            const userID = this.jwtHelper.decodeToken(token).data.id;
            const userEmail = this.jwtHelper.decodeToken(token).data.email;
            const userRole = this.jwtHelper.decodeToken(token).data.role;

            const issuedAt = this.jwtHelper.decodeToken(token).iat;
            const exp = this.jwtHelper.decodeToken(token).exp;

            localStorage.setItem('token', res.token.token);
            localStorage.setItem('refreshToken', res.token.refreshToken);
            localStorage.setItem('userID', userID);
            localStorage.setItem('userName', userName);
            localStorage.setItem('userEmail', userEmail);
            localStorage.setItem('userRole', userRole);
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

  // refreshToken() {
  //   console.log('refresh token accessed');
  //   let data = {refreshToken: this.getRefreshToken()};
  //   const body = JSON.stringify(data);
  //   console.log('Refresh token: ' + body);
  //   const headers = new Headers({'Content-Type': 'application/json'});
  //   const url = this.link + 'refresh';
  //   console.log(url);

  //   return this.http.post(url, body, {headers: headers})
  //     .map((response: Response) => {
  //       console.log('We have a response from the server');
  //       const res = response.json();
  //       console.log(res);
  //       if (res.token) {
  //         console.log(res.token.token);
  //         const token = res.token.token;
  //         return token;
  //       }
  //     })
  //     .catch((err: Response) => {
  //         console.log('eroare la jwt retry');
  //         console.log(err);
  //         return Observable.throw(err.json());
  //     });
  // }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.router.navigateByUrl('/login');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  isLoggedIn() {
    // verify if user is logedIn
    if ( localStorage.getItem('token') !== null ) {
      // true
      return localStorage.getItem('token') !== null;
    } else {
      // window.alert('Forbidden access! Please log in!');
      // this.router.navigateByUrl('/login');
      return localStorage.getItem('token') !== null;
    }
  }

  // isLoggedIn() {
  //   return tokenNotExpired();
  // }

  getUser() {
    if ( localStorage.getItem('userID') !== null &&
      localStorage.getItem('userName') !== null &&
      localStorage.getItem('userEmail') !== null &&
      localStorage.getItem('userRole') !== null) {
      const userDetails = {
        'id' : localStorage.getItem('userID'),
        'name' : localStorage.getItem('userName'),
        'email' : localStorage.getItem('userEmail'),
        'role' : localStorage.getItem('userRole')
      };
      return userDetails;
    }
  }

  resetPassword(email: string) {
    console.log(email);
    return 'new email';
  }
}
