import { Utils } from '../utils/Utils';

export class Category {
  id: string;
  name: string;


  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      throw new Error('Undefined data');
    }

    this.id = Utils.getParam(data, 'id');
    this.name = Utils.getParam(data, 'name');
  }

  getID = function() {
    return this.id;
  };

  getName = function() {
    return this.name;
  };

}
