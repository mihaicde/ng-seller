import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { FactoryModel } from '../models/factory.model';

@Injectable()
export class BaseService {
  protected collection;
  protected link = 'http://localhost:5555';

  constructor(protected http: Http) {
    console.log('Base service initialized');
  }

  getHeaders() {
    return new Headers({'Content-Type': 'application/json'});
  }

  getToken() {
    const token = localStorage.getItem('token')
         ? '?token=' + localStorage.getItem('token')
         : '';

    return token;
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

    url = this.buildUrl(url, object.id);

    return this.http.delete(url)
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
    return url + (typeof id !== 'undefined' ? '/' + id : '') ;
  }

}
