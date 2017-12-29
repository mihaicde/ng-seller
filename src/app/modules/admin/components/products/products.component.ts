import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Product } from '../../../../models/catalogue/Product';
import { ProductService } from '../../services/product.service';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {

  @ViewChild('modalCrud')
  childComponentCrud: ModalComponent;

  @ViewChild('modalDelete')
  childComponentDelete: ModalComponent;

  products: Product[];
  crudForm: FormGroup;
  selectedProduct: Product;
  deleteProduct: Product;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private productService: ProductService,
    private notifyService: NotificationService
  ) { }

  reset() {
    this.crudForm.reset();
  }

  openModalCrud(product: Product) {
    this.childComponentCrud.openModal();
    if (product) {
      this.childComponentCrud.title = 'Editeaza Produsul';
      this.selectedProduct = product;
      this.edit = true;
      this.crudForm.patchValue({
        name: this.selectedProduct.name
      });
    }  else {
      this.childComponentCrud.title = 'Adauga Produsul';
    }
    console.log(this.crudForm);
  }

  closeModalCrud() {
    this.reset();
    this.childComponentCrud.closeModal();
    this.edit = false;
  }

  openModalDelete(product: Product) {
    this.deleteProduct = product;
    this.childComponentDelete.openModal();
  }

  closeModalDelete() {
    this.childComponentDelete.closeModal();
  }

  ngOnInit() {
    this.productService.index()
    .subscribe(
      (products: Product[]) => {
        this.products = products;
        console.log(this.products);
      }
    );

    this.crudForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });

    this.childComponentCrud.showFooter = false;
    this.childComponentCrud.title = 'Adauga Produsul';
  }

  onDelete(product?: Product) {
    this.productService.destroy(product)
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

        const product = new Product(JSON.parse(JSON.stringify({
          id: this.selectedProduct.id,
          name: this.crudForm.value.name
        })));
        this.productService.update(product)
        .subscribe(
          data => {
            this.edit = false;
            console.log(data);
            this.notifyService.success(data.message);
            for (let i = 0; i < this.products.length; i++) {
              if (this.products[i].id === product.id) {
                this.products[i].name = product.name;
              }
            }
          },
          error => console.log(error)
        );
      } else {
        const product = new Product(this.crudForm.value);
        this.productService.store(product)
        .subscribe(
            data => {
              this.notifyService.success(data['message']);
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
