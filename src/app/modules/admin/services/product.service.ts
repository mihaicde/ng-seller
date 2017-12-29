import { Injectable } from '@angular/core';

import { Product } from '../../../models/catalogue/Product';
import { BaseService } from '../../../shared/services/base.service';

@Injectable()
export class ProductService extends BaseService  {

  index() {
    return this.getModel('/products', 'PRODUCT');
  }

  store(product: Product) {
    return this.addModel('/products', product, 'PRODUCT', {});
  }

  destroy(product: Product) {
    return this.deleteModel('/products', product);
  }


  update(product: Product) {
    return this.updateModel('/products', product, 'PRODUCT');
  }

}
