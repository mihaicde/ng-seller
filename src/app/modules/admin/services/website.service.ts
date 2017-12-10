import { Injectable } from '@angular/core';

import { Website } from '../../../models/Website';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class WebsiteService extends BaseService {

  index() {
    return this.getModel('/websites', 'WEBSITE');
  }

  store(website: Website) {
    return this.addModel('/websites', website, 'WEBSITE', {});
  }

  destroy(website: Website) {
    return this.deleteModel('/websites', website);
  }

  update(website: Website) {
    return this.updateModel('/websites', website, 'WEBSITE');
  }

}
