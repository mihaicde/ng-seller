import { Injectable, EventEmitter } from '@angular/core';

import { Tag } from '../../../models/catalogue/Tag';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class TagService extends BaseService {

  index() {
    return this.getModel('/tags', 'TAG');
  }

  store(tag: Tag) {
    return this.addModel('/tags', tag, 'TAG', {});
  }

  destroy(tag: Tag) {
    return this.deleteModel('/tags', tag);
  }


  update(tag: Tag) {
    return this.updateModel('/tags', tag, 'TAG');
  }

  // private tags: Tag[] = [];

  // constructor(protected http: Http) {
  //   console.log('Tag service initialized');
  // }

  // getTags() {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   return this.http.get('http://localhost:5555/tags', { headers })
  //     .map((response: Response) => {
  //       const tags = response.json().tags;
  //       const transformedTags: Tag[] = [];
  //       for (let i = 0; i < tags.length; i ++) {
  //         transformedTags.push(new Tag(tags[i]));
  //       }
  //       this.tags = transformedTags;
  //       return transformedTags;
  //     });
  // }



  // store(tag: Tag) {
  //   // console.log(tag);
  //   const body = JSON.stringify(tag);
  //   const headers = new Headers({'Content-Type': 'application/json'});

  //    return this.http.post('http://localhost:5555/tags', body, {headers: headers})
  //        .map((response: Response) =>  {
  //           const result = response.json();
  //           const newTag = new Tag(result.object);
  //           this.tags.push(newTag);
  //           return response.json();
  //         })
  //         .catch((e: any) => Observable.throw(e));
  // }



  // destroy(tag: Tag) {
  //   this.tags.splice(this.tags.indexOf(tag), 1);
  //   return this.http.delete('http://localhost:5555/tags/' + tag.id)
  //     .map((response: Response) => response.json());
  // }



  // update(tag: Tag) {
  //   const body = JSON.stringify(tag);
  //   const headers = new Headers({'Content-Type': 'application/json'});
  //   console.log(body);
  //   return this.http.put('http://localhost:5555/tags/' + tag.id, body, {headers: headers})
  //     .map((response: Response) => response.json());
  // }

}
