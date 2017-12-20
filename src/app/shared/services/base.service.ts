import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { JwtHelper} from 'angular2-jwt';

import { FactoryModel } from '../models/factory.model';

@Injectable()
export class BaseService {
  protected collection;
  protected link = 'http://localhost:5555';
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(protected http: Http) {
    console.log('Base service initialized');
  }

  getHeaders() {
    const headers =  new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
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
      .map((response: Response) => {
        const objectResults = response.json().obj;
        const transformedObject = [];
        let model;
        for (const obj of objectResults){
          model = FactoryModel.getInstance().build(className, obj);
          transformedObject.push(model);
        }
        this.collection = transformedObject;
        return transformedObject;
      })
      .catch((err: Response) => {
        console.log('eroare la serviciu');
        console.log(err);
        return Observable.throw(err.json());
    });
  }

  addModel(url: string, object: any, className: string, parameters) {
    const body = JSON.stringify(object);
    const headers = this.getHeaders();

    url = this.buildUrl(url);

    return this.http.post(url, body, {headers: headers})
      .map((response: Response) => {
        const result = response.json();
        console.log(result);
        const model = FactoryModel.getInstance().build(className, result.obj);
        console.log(model);
        this.collection.push(model);
        return result;
      });
  }

  deleteModel(url: string, object: any) {
    this.collection.splice(this.collection.indexOf(object), 1);
    const headers = this.getHeaders();

    url = this.buildUrl(url, object.id);

    return this.http.delete(url, {headers: headers})
        .map((response: Response) => response.json());
  }

  updateModel(url: string, object: any, className: string) {
    const body = JSON.stringify(object);
    const headers = this.getHeaders();

    url = this.buildUrl(url, object.id);

    return this.http.put(url, body, {headers: headers})
         .map((response: Response) => response.json());
  }

  // buildUrl(url: string, id?: any) {
  //   const token = this.getToken();
  //   return url + (typeof id !== 'undefined' ? '/' + id : '') + token;
  // }

  buildUrl(url: string, id?: any) {
    url = this.link + url;
    // const token = this.getToken();
    return url + (typeof id !== 'undefined' ? '/' + id : '');
  }

}
