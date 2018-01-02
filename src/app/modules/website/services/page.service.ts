import { Injectable, EventEmitter } from '@angular/core';

import { Page } from '../../../models/pages/Page';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class PageService extends BaseService {

  index() {
    return this.getModel('/pages', 'PAGE');
  }

  store(page: Page) {
    console.log(page);
    return this.addModel('/pages', page, 'PAGE', {});
  }

  destroy(page: Page) {
    return this.deleteModel('/pages', page);
  }

  update(page: Page) {
    return this.updateModel('/pages', page, 'PAGE');
  }

}
