import { Injectable, EventEmitter } from '@angular/core';

import { Filter } from '../../../models/catalogue/Filter';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class FilterService extends BaseService {

  index() {
    return this.getModel('/filters', 'FILTER');
  }

  store(filter: Filter) {
    return this.addModel('/filters', filter, 'FILTER', {});
  }

  destroy(filter: Filter) {
    return this.deleteModel('/filters', filter);
  }


  update(filter: Filter) {
    return this.updateModel('/filters', filter, 'FILTER');
  }
}
