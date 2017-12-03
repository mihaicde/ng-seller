import { Injectable } from '@angular/core';

import { Spec } from '../../../models/Spec';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class SpecsService extends BaseService {

  index() {
    return this.getModel('/specs', 'SPEC');
  }

  store(spec: Spec) {
    return this.addModel('/specs', spec, 'SPEC', {});
  }

  destroy(spec: Spec) {
    return this.deleteModel('/specs', spec);
  }


  update(spec: Spec) {
    return this.updateModel('/specs', spec, 'SPEC');
  }

}
