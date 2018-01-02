import { Injectable, Injector } from '@angular/core';
import {
  HttpHeaders,
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { AuthService } from './auth.service';
import { JwtHelper} from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()

export class JwtInterceptor implements HttpInterceptor {
  constructor(
    // public auth: AuthService, 
    private inj: Injector) {}
    private jwtHelper: JwtHelper = new JwtHelper();

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
      .catch((error: any) => {
        if (error.status === 401) {
          const auth = this.inj.get(AuthService);
          const http = this.inj.get(HttpClient);
          var data = auth.getRefreshToken();
          console.log(data);
          const headers = new HttpHeaders({'Content-Type': 'application/json'});
          const body = JSON.stringify(data);
          console.log(body);
          const url = auth.link + 'refresh';

          return http.post(url, body).flatMap((res) => {
            console.log('....................................');
            console.log('PULA');
            console.log(res);
            if (res['token']) {
              console.log(res['token'].token);
              const token = res['token'].token;
              console.log(
                this.jwtHelper.decodeToken(token),
                this.jwtHelper.getTokenExpirationDate(token),
                this.jwtHelper.isTokenExpired(token)
              );
  
              const issuedAt = this.jwtHelper.decodeToken(token).iat;
              const exp = this.jwtHelper.decodeToken(token).exp;
  
              localStorage.setItem('token', res['token'].token);
              localStorage.setItem('refreshToken', res['token'].refreshToken);
              localStorage.setItem('exp', exp);
     
            }
            // get token from response.
            // put token in localstorage.
            // add token to the request.
  
            // Do the request again with the new token.
            const authReq = request.clone({
              setHeaders: {
                Authorization: `Bearer ${auth.getToken()}`
              }
            });
            return next.handle(authReq);
          });
        }
  
        return Observable.throw(error);
      });
    }

// Set the headers for the refresh token
//   ->header('Cache-Control', 'public, max-age=45')
//   ->header('Expires', date('D, d M Y H:i:s ', time() + 45).'GMT');
}