import { Injectable, EventEmitter } from '@angular/core';

import { AboutPage } from '../../../models/pages/About';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class AboutPageService extends BaseService {

  index() {
    return this.getModel('/aboutPage', 'ABOUT');
  }

  store(aboutPage: AboutPage) {
    return this.addModel('/aboutPage', aboutPage, 'ABOUT', {});
  }

  destroy(aboutPage: AboutPage) {
    return this.deleteModel('/aboutPage', aboutPage);
  }

  update(aboutPage: AboutPage) {
    return this.updateModel('/aboutPage', aboutPage, 'ABOUT');
  }

}
