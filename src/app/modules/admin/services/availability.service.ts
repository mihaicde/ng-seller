import { Injectable, EventEmitter } from '@angular/core';

import { Availability } from '../../../models/catalogue/Availability';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class AvailabilityService extends BaseService {

  index() {
    return this.getModel('/availabilities', 'AVAILABILITY');
  }

  store(availabilities: Availability) {
    return this.addModel('/availabilities', availabilities, 'AVAILABILITY', {});
  }

  destroy(availabilities: Availability) {
    return this.deleteModel('/availabilities', availabilities);
  }


  update(availabilities: Availability) {
    return this.updateModel('/availabilities', availabilities, 'AVAILABILITY');
  }

}
