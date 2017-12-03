
import { Tag } from '../../models/Tag';
import { Availability } from '../../models/Availability';
import { Campaign } from '../../models/Campaign';
import { Category } from '../../models/Category';
import { Filter } from '../../models/Filter';
import { Spec } from '../../models/Spec';
import { Product } from '../../models/Product';
// var category = FactoryModel.getInstance().build(className, parameters);


export class FactoryModel {
    protected static instance = null;
    private className;
    private constructor() {}

    public static getInstance() {
      if (this.instance == null) {
          this.instance = new FactoryModel();
      }

      return this.instance;
    }

    build(className, parameters) {
      switch (className) {
        case 'TAG':
        return new Tag(parameters);
        case 'AVAILABILITY':
        return new Availability(parameters);
        case 'CAMPAIGN':
        return new Filter(parameters);
        case 'CATEGORY':
        return new Filter(parameters);
        case 'FILTER':
        return new Filter(parameters);
        case 'SPEC':
        return new Filter(parameters);
        case 'PRODUCT':
        return new Filter(parameters);
      }
    }
}
