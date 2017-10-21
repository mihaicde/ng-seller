import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Message } from 'primeng/primeng';
import { NotificationService } from '../shared/services/notification.service';

import { Category } from '../models/Category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];
  results: string[];
  categoriesUrl: 'api/categories';

  constructor(
    private notification: NotificationService,
    private http: HttpClient,
    private categoryService: CategoryService) {
  }

  throwError() {
    this.notification.success('success ba fraiere');
    throw new Error('crazy nightmare');
  }

  getMessages(): Message[] {
      return this.notification.message;
  }

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      //  console.log(categories);
      }
    );
  }

}
