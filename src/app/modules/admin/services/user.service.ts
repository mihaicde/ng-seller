import { Injectable, EventEmitter } from '@angular/core';

import { User } from '../../../models/User';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class UserService extends BaseService {

  index() {
    return this.getModel('/users', 'USER');
  }

  store(users: User) {
    return this.addModel('/users', users, 'USER', {});
  }

  destroy(users: User) {
    return this.deleteModel('/users', users);
  }


  update(users: User) {
    return this.updateModel('/users', users, 'USER');
  }

}
