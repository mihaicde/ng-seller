import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Filter } from '../../../../models/Filter';
import { FilterService } from '../../services/filter.service';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit {

  @ViewChild('modalCrud')
  childComponentCrud: ModalComponent;

  @ViewChild('modalDelete')
  childComponentDelete: ModalComponent;

  filters: Filter[];
  crudForm: FormGroup;
  selectedFilter: Filter;
  deleteFilter: Filter;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private filterService: FilterService,
    private notifyService: NotificationService
  ) { }

  reset() {
    this.crudForm.reset();
  }

  openModalCrud(filter: Filter) {
    this.childComponentCrud.openModal();
    if (filter) {
      this.childComponentCrud.title = 'Editeaza Filtru';
      this.selectedFilter = filter;
      this.edit = true;
      this.crudForm.patchValue({
        name: this.selectedFilter.name
      });
    }  else {
      this.childComponentCrud.title = 'Adauga Filtru';
    }
    console.log(this.crudForm);
  }

  closeModalCrud() {
    this.reset();
    this.childComponentCrud.closeModal();
    this.edit = false;
  }

  openModalDelete(filter?: Filter) {
    this.deleteFilter = filter;
    this.childComponentDelete.openModal();
  }

  closeModalDelete() {
    this.childComponentDelete.closeModal();
  }

  ngOnInit() {
    this.filterService.index()
    .subscribe(
      (filters: Filter[]) => {
        this.filters = filters;
      }
    );

    this.crudForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });

    this.childComponentCrud.showFooter = false;
    this.childComponentCrud.title = 'Adauga Filtru';
  }

  onDelete(filter?: Filter) {
    this.filterService.destroy(filter)
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

        const filter = new Filter(JSON.parse(JSON.stringify({
          id: this.selectedFilter.id,
          name: this.crudForm.value.name
        })));
        this.filterService.update(filter)
        .subscribe(
          data => {
            this.edit = false;
            console.log(data);
            this.notifyService.success(data.message);
            for (let i = 0; i < this.filters.length; i++) {
              if (this.filters[i].id === filter.id) {
                this.filters[i].name = filter.name;
              }
            }
          },
          error => console.log(error)
        );
      } else {
        const filter = new Filter(this.crudForm.value);
        this.filterService.store(filter)
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
