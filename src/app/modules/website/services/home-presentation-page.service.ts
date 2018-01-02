import { Injectable, EventEmitter } from '@angular/core';

import { HomePresentationPage } from '../../../models/pages/HomePresentation';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class HomePresentationPageService extends BaseService {

  index() {
    return this.getModel('/homePresentationPage', 'HOMEPRESENTATION');
  }

  store(homePresentationPage: HomePresentationPage) {
    return this.addModel('/homePresentationPage', homePresentationPage, 'HOMEPRESENTATION', {});
  }

  destroy(homePresentationPage: HomePresentationPage) {
    return this.deleteModel('/homePresentationPage', homePresentationPage);
  }

  update(homePresentationPage: HomePresentationPage) {
    return this.updateModel('/homePresentationPage', homePresentationPage, 'HOMEPRESENTATION');
  }

}
