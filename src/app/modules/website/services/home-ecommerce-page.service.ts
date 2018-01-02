import { Injectable, EventEmitter } from '@angular/core';

import { HomeEcommercePage } from '../../../models/pages/HomeEcommerce';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class HomeEcommercePageService extends BaseService {

  index() {
    return this.getModel('/homeEcommercePage', 'HOMEECOMMERCE');
  }

  store(homeEcommercePage: HomeEcommercePage) {
    return this.addModel('/homeEcommercePage', homeEcommercePage, 'HOMEECOMMERCE', {});
  }

  destroy(homeEcommercePage: HomeEcommercePage) {
    return this.deleteModel('/homeEcommercePage', homeEcommercePage);
  }

  update(homeEcommercePage: HomeEcommercePage) {
    return this.updateModel('/homeEcommercePage', homeEcommercePage, 'HOMEECOMMERCE');
  }

}
