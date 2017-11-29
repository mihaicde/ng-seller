import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { User } from '../../models/User';

@Injectable()
export class AuthService {
    constructor(private http: Http, private router: Router) {}

    signup(user: User) {
      const body = JSON.stringify(user);
      console.log(body);
      const headers = new Headers({'Content-Type': 'application/json'});

      return this.http.post('http://127.0.0.1:3333/user', body, {headers: headers})
          .map((response: Response) => response.json())
          .catch((err: Response) => {
              console.log('eroare la serviciu');
              console.log(err);
              return Observable.throw(err.json());
          });
    }

    login(email: string, password: string) {
    }

    logout() {
    }

    isLoggedIn() {
      // verify if user is logedIn
      if (localStorage.getItem('token') !== null ) {
        // true
        return localStorage.getItem('token') !== null;
      } else {
        // false
        window.alert('Forbidden access! Please log in!');
        this.router.navigateByUrl('/');
        return localStorage.getItem('token') !== null;
      }
    }
}
