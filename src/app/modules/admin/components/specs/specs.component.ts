import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Spec } from '../../../../models/catalogue/Spec';
import { SpecsService } from '../../services/specs.service';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';


@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html'
})
export class SpecsComponent implements OnInit {

  @ViewChild('modalCrud')
  childComponentCrud: ModalComponent;

  @ViewChild('modalDelete')
  childComponentDelete: ModalComponent;

  specs: Spec[];
  crudForm: FormGroup;
  selectedSpec: Spec;
  deleteSpec: Spec;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private specService: SpecsService,
    private notifyService: NotificationService
  ) { }

  reset() {
    this.crudForm.reset();
  }

  openModalCrud(spec: Spec) {
    this.childComponentCrud.openModal();
    if (spec) {
      this.childComponentCrud.title = 'Editeaza Filtru';
      this.selectedSpec = spec;
      this.edit = true;
      this.crudForm.patchValue({
        name: this.selectedSpec.name
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

  openModalDelete(spec?: Spec) {
    this.deleteSpec = spec;
    this.childComponentDelete.openModal();
  }

  closeModalDelete() {
    this.childComponentDelete.closeModal();
  }

  ngOnInit() {
    this.specService.index()
    .subscribe(
      (specs: Spec[]) => {
        this.specs = specs;
        console.log(this.specs);
      }
    );

    this.crudForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });

    this.childComponentCrud.showFooter = false;
    this.childComponentCrud.title = 'Adauga Specificatie';
  }

  onDelete(spec?: Spec) {
    this.specService.destroy(spec)
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

        const spec = new Spec(JSON.parse(JSON.stringify({
          id: this.selectedSpec.id,
          name: this.crudForm.value.name
        })));

        this.specService.update(spec)
        .subscribe(
          data => {
            this.edit = false;
            console.log(data);
            this.notifyService.success(data.message);
            for (let i = 0; i < this.specs.length; i++) {
              if (this.specs[i].id === spec.id) {
                this.specs[i].name = spec.name;
              }
            }
          },
          error => console.log(error)
        );
      } else {
        const spec = new Spec(this.crudForm.value);
        this.specService.store(spec)
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
