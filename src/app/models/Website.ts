import { Utils } from '../utils/Utils';

export class Website {
  id: string;
  name: string;
  domain: string;
  type: string;
  category: string;
  user_id: number;


  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      return;
    }

    this.id = Utils.getParam(data, 'id');
    this.name = Utils.getParam(data, 'name');
    this.domain = Utils.getParam(data, 'domain');
    this.type = Utils.getParam(data, 'type');
    this.category = Utils.getParam(data, 'category');
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

  getType = function() {
    return this.type;
  };

  getCategory = function() {
    return this.category;
  };

  getUserId = function() {
    return this.user_id;
  };

}
