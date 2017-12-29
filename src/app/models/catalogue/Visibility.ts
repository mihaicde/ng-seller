import { Utils } from '../../utils/Utils';

export class Visibility {
  id: string;
  name: string;


  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      return;
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
