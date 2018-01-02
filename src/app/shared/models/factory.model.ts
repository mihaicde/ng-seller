
// Catalog models
import { Tag } from '../../models/catalogue/Tag';
import { Availability } from '../../models/catalogue/Availability';
import { Campaign } from '../../models/catalogue/Campaign';
import { Category } from '../../models/catalogue/Category';
import { Filter } from '../../models/catalogue/Filter';
import { Spec } from '../../models/catalogue/Spec';
import { Product } from '../../models/catalogue/Product';
import { Website } from '../../models/Website';
import { User } from '../../models/User';
import { Role } from '../../models/Role';
// They are called: var category = FactoryModel.getInstance().build(className, parameters);

// Pages models
import { BaseContent } from '../../models/pages/BaseContent';
import { Page } from '../../models/pages/Page';

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
        return new Campaign(parameters);
        case 'CATEGORY':
        return new Category(parameters);
        case 'FILTER':
        return new Filter(parameters);
        case 'SPEC':
        return new Spec(parameters);
        case 'PRODUCT':
        return new Product(parameters);
        case 'WEBSITE':
        return new Website(parameters);
        case 'USER':
        return new User(parameters);
        case 'ROLE':
        return new Role(parameters);
        case 'BASEPAGE':
        return new BaseContent(parameters);
        case 'PAGE':
        return new Page(parameters);
      }
    }
}
