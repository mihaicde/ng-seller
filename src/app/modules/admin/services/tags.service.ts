import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Tag } from '../../../models/Tag';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TagService {
  private tags: Tag[] = [];

  constructor(private http: Http) {
    console.log('Tag service initialized');
  }

  getTags() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:5555/tags', { headers })
      .map((response: Response) => {
        // console.log(response.json().tags);
        const tags = response.json().tags;
        const transformedTags: Tag[] = [];
        for (let i = 0; i < tags.length; i ++) {
          // console.log(tags[i]);
          transformedTags.push(new Tag(tags[i]));
        }
        // console.log(transformedTags);
        // for (const tag of tags) {
        //   transformedTags.push(new Tag(
        //         tag.name)
        //     );
        // }
        this.tags = transformedTags;
        return transformedTags;
      });
  }

  store(tag: Tag) {
    // console.log(tag);
    const body = JSON.stringify(tag);
    const headers = new Headers({'Content-Type': 'application/json'});

     return this.http.post('http://localhost:5555/tags', body, {headers: headers})
         .map((response: Response) =>  {
            const result = response.json();
            const tag = new Tag(result.object);
            this.tags.push(tag);
            return response.json();
          })
          .catch((e: any) => Observable.throw(e));
  }

  destroy(tag: Tag) {
    this.tags.splice(this.tags.indexOf(tag), 1);
    return this.http.delete('http://localhost:5555/tags/' + tag.id)
      .map((response: Response) => response.json());
  }

  update(tag: Tag) {
    const body = JSON.stringify(tag);
    const headers = new Headers({'Content-Type': 'application/json'});
    console.log(body);
    return this.http.put('http://localhost:5555/tags/' + tag.id, body, {headers: headers})
      .map((response: Response) => response.json());
  }

}
