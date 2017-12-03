import { Utils } from '../utils/Utils';

import { Category} from './Category';
import { Visibility } from './Visibility';
import { Availability } from './Availability';
import { Tag } from './Tag';

export class Product {
  id: string;
  name: string;
  // description: string;
  // category: Category;
  // visibility: Visibility;
  // availability: Availability;
  // tag: Tag;
  // price: number;
  // imageUrl: string;

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
