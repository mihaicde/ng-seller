import { Injectable } from '@angular/core';

import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class RolesService extends BaseService {

  index() {
    return this.getModel('/roles', 'ROLE');
  }

}
