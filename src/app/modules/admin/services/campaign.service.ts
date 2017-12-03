import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Campaign } from '../../../models/Campaign';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class CampaignService extends BaseService {

  index() {
    return this.getModel('/campaigns', 'CAMPAIGN');
  }

  store(campaigns: Campaign) {
    return this.addModel('/campaigns', campaigns, 'CAMPAIGN', {});
  }

  destroy(campaigns: Campaign) {
    return this.deleteModel('/campaigns', campaigns);
  }


  update(campaigns: Campaign) {
    return this.updateModel('/campaigns', campaigns, 'CAMPAIGN');
  }

}
