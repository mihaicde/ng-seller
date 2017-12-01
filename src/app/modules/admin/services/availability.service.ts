import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Availability } from '../../../models/Availability';
import { BaseService } from '../../../shared/services/base.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AvailabilityService extends BaseService {

  getTags() {
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
