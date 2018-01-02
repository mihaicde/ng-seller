import { Injectable, EventEmitter } from '@angular/core';

import { HelpPage } from '../../../models/pages/Help';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class HelpPageService extends BaseService {

  index() {
    return this.getModel('/helpPage', 'HELP');
  }

  store(helpPage: HelpPage) {
    return this.addModel('/helpPage', helpPage, 'HELP', {});
  }

  destroy(helpPage: HelpPage) {
    return this.deleteModel('/helpPage', helpPage);
  }

  update(helpPage: HelpPage) {
    return this.updateModel('/helpPage', helpPage, 'HELP');
  }

}
