import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Category } from '../../../../models/Category';
import { CategoryService } from '../../services/category.service';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {

  @ViewChild('modalCrud')
  childComponentCrud: ModalComponent;

  @ViewChild('modalDelete')
  childComponentDelete: ModalComponent;

  categories: Category[];
  crudForm: FormGroup;
  selectedCategory: Category;
  deleteCategory: Category;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private categoryService: CategoryService,
    private notifyService: NotificationService
  ) { }

  reset() {
    this.crudForm.reset();
  }

  openModalCrud(category: Category) {
    this.childComponentCrud.openModal();
    if (category) {
      this.childComponentCrud.title = 'Editeaza Categoria';
      this.selectedCategory = category;
      this.edit = true;
      this.crudForm.patchValue({
        name: this.selectedCategory.name
      });
    }  else {
      this.childComponentCrud.title = 'Adauga Categoria';
    }
    console.log(this.crudForm);
  }

  closeModalCrud() {
    this.reset();
    this.childComponentCrud.closeModal();
    this.edit = false;
  }

  openModalDelete(category: Category) {
    this.deleteCategory = category;
    this.childComponentDelete.openModal();
  }

  closeModalDelete() {
    this.childComponentDelete.closeModal();
  }

  ngOnInit() {
    this.categoryService.index()
    .subscribe(
      (categories: Category[]) => {
        this.categories = categories;
        console.log(this.categories);
      }
    );

    this.crudForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });

    this.childComponentCrud.showFooter = false;
    this.childComponentCrud.title = 'Adauga Categoria';
  }

  onDelete(category?: Category) {
    this.categoryService.destroy(category)
    .subscribe(
      data => {
        console.log(data);
        this.notifyService.success(data.message);
      },
      err => console.log(err)
    );
    this.closeModalDelete();
  }

  onCrud() {
    if (this.crudForm.valid) {
      if (this.edit) {
        console.log('editing....');

        const category = new Category(JSON.parse(JSON.stringify({
          id: this.selectedCategory.id,
          name: this.crudForm.value.name
        })));
        this.categoryService.update(category)
        .subscribe(
          data => {
            this.edit = false;
            console.log(data);
            this.notifyService.success(data.message);
            for (let i = 0; i < this.categories.length; i++) {
              if (this.categories[i].id === category.id) {
                this.categories[i].name = category.name;
              }
            }
          },
          error => console.log(error)
        );
      } else {
        const category = new Category(this.crudForm.value);
        this.categoryService.store(category)
        .subscribe(
            data => {
              this.notifyService.success(data.message);
            },
            error => {
              console.log(error);
              throw new Error(error);
            }
        );
      }
      this.reset();
      this.closeModalCrud();
    } else {
      this.formBuilderService.validateAllFormFields(this.crudForm);
    }
  }

}
