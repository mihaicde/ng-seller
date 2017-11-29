import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { FactoryModel } from '../models/factory.model';

@Injectable()
export class BaseService {
  protected collection;

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
        // console.log(objectResults);
        let transformedObject = []; //???
        let model;
        for (let obj of objectResults){
          model = FactoryModel.getInstance().build(className, obj);
          transformedObject.push(model);
          }
        console.log(transformedObject);
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
        let model = FactoryModel.getInstance().build(className, result.obj);
        this.collection.push(model);
        return model;
      });
  }

  deleteModel(url: string, object: any) {
    this.collection.splice(this.collection.indexOf(object), 1);

    url = this.buildUrl(url, object._id);

    return this.http.delete(url)
        .map((response: Response) => response.json());
  }

  updateModel(url: string, object: any, className: string) {
    const body = JSON.stringify(object);
    const headers = this.getHeaders();

    url = this.buildUrl(url, object._id);

    return this.http.patch(url, body, {headers: headers})
         .map((response: Response) => response.json());
  }

  buildUrl(url: string, id?: any) {
    const token = this.getToken();
    return url + (typeof id !== 'undefined' ? '/' + id : '') + token;
  }

}
