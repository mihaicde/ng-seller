import { 
  HttpClient, 
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
// import { Response } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { JwtHelper} from 'angular2-jwt';

import { FactoryModel } from '../models/factory.model';

@Injectable()
export class BaseService {
  protected collection = [];
  protected link = 'http://localhost:5555';
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(protected http: HttpClient) {
    console.log('Base service initialized');
  }

  getHeaders() {
    const headers =  new HttpHeaders({'Content-Type': 'application/json'});
    return headers;
  }

  checkTokenExpired() {
    const token = localStorage.getItem('token');
    // const refreshToken = localStorage.getItem('refreshToken');

    return this.jwtHelper.isTokenExpired(token);
  }

  getModel(url: string, className: string) {
    const headers = this.getHeaders();

    url = this.buildUrl(url);

    return this.http.get(url, { headers })
      .map((response: HttpResponse<Object>) => {
        const objectResults = response['obj'];
        console.log(objectResults);
        const transformedObject = [];
        let model;
        for (const obj of objectResults){
          model = FactoryModel.getInstance().build(className, obj);
          transformedObject.push(model);
        }
        this.collection = transformedObject;
        return transformedObject;
      })
      .catch((err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error.error.message}`);
        }
        console.log('eroare la serviciu');
        console.log(err);
        return Observable.throw(err.error.error.message);
      });
  }

  addModel(url: string, object: any, className: string, parameters) {
    const body = JSON.stringify(object);
    const headers = this.getHeaders();

    url = this.buildUrl(url);

    return this.http.post(url, body, {headers: headers})
      .map((response: HttpResponse<any>) => {
        const result = response;
        console.log(result);
        const model = FactoryModel.getInstance().build(className, result['obj']);
        console.log(model);
        this.collection.push(model);
        return result;
      })
      .catch((err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        console.log('eroare la serviciu');
        console.log(err);
        return Observable.throw(err.error.message);
      });
  }

  deleteModel(url: string, object: any) {
    this.collection.splice(this.collection.indexOf(object), 1);
    const headers = this.getHeaders();

    url = this.buildUrl(url, object.id);

    return this.http.delete(url, {headers: headers})
      .map((response: HttpResponse<any>) => response)
      .catch((err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        console.log('eroare la serviciu');
        console.log(err);
        return Observable.throw(err.error.message);
      });
  }

  updateModel(url: string, object: any, className: string) {
    const body = JSON.stringify(object);
    const headers = this.getHeaders();

    url = this.buildUrl(url, object.id);

    return this.http.put(url, body, {headers: headers})
      .map((response: HttpResponse<any>) => response)
      .catch((err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        console.log('eroare la serviciu');
        console.log(err);
        return Observable.throw(err.error.message);
      });
  }

  buildUrl(url: string, id?: any) {
    url = this.link + url;
    return url + (typeof id !== 'undefined' ? '/' + id : '');
  }

}
