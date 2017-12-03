import { Injectable, EventEmitter } from '@angular/core';

import { Category } from '../../../models/Category';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class CategoryService extends BaseService {

  index() {
    return this.getModel('/categories', 'CATEGORY');
  }

  store(categories: Category) {
    return this.addModel('/categories', categories, 'CATEGORY', {});
  }

  destroy(categories: Category) {
    return this.deleteModel('/categories', categories);
  }


  update(categories: Category) {
    return this.updateModel('/categories', categories, 'CATEGORY');
  }

}
