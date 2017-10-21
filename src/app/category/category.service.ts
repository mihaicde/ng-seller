import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Category } from '../models/Category';
import { BaseService } from '../modules/admin/services/base.service';

@Injectable()
export class CategoryService extends BaseService {
    private categories: Category[] = [];
    categoriesUrl: 'api/categories';

    getCategories() {
        // return this.getModel('/categories', 'CATEGORY');
        return this.http.get(this.categoriesUrl)
          .map(response => response.json());
    }

    addCategory(category: any) {
        // return this.addModel('/categories', category, 'CATEGORY', {});
    }

    deleteCategory(category: any) {
        // return this.deleteModel('/categories', category);
    }

    updateCategory(category: Category) {
        // return this.updateModel('/categories', category, 'CATEGORY');
    }
}
