import { Utils } from '../utils/Utils';

export class Website {
  id: string;
  name: string;
  domain: string;
  websiteType: string;
  user_id: number;


  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      return;
    }

    this.id = Utils.getParam(data, 'id');
    this.name = Utils.getParam(data, 'name');
    this.domain = Utils.getParam(data, 'domain');
    this.websiteType = Utils.getParam(data, 'websiteType');
    this.user_id = Utils.getParam(data, 'user_id');
  }

  getID = function() {
    return this.id;
  };

  getName = function() {
    return this.name;
  };

  getDomain = function() {
    return this.domain;
  };

  getWebsiteType = function() {
    return this.websiteType;
  };

  getUserId = function() {
    return this.user_id;
  };

}
