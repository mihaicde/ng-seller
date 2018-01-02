import { Injectable, EventEmitter } from '@angular/core';

import { ContactPage } from '../../../models/pages/Contact';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class ContactPageService extends BaseService {

  index() {
    return this.getModel('/contactPage', 'CONTACT');
  }

  store(contactPage: ContactPage) {
    return this.addModel('/contactPage', contactPage, 'CONTACT', {});
  }

  destroy(contactPage: ContactPage) {
    return this.deleteModel('/contactPage', contactPage);
  }

  update(contactPage: ContactPage) {
    return this.updateModel('/contactPage', contactPage, 'CONTACT');
  }

}
