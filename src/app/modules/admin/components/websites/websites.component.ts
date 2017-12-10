import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Website } from '../../../../models/Website';
import { WebsiteService } from '../../services/website.service';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';


@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html'
})
export class WebsitesComponent implements OnInit {

  @ViewChild('modalCrud')
  childComponentCrud: ModalComponent;

  @ViewChild('modalDelete')
  childComponentDelete: ModalComponent;

  websites: Website[];
  crudForm: FormGroup;
  selectedWebsite: Website;
  deleteWebsite: Website;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private websiteService: WebsiteService,
    private notifyService: NotificationService
  ) { }

  reset() {
    this.crudForm.reset();
  }

  openModalCrud(website: Website) {
    this.childComponentCrud.openModal();
    if (website) {
      this.childComponentCrud.title = 'Editeaza Website-ul';
      this.selectedWebsite = website;
      this.edit = true;
      this.crudForm.patchValue({
        name: this.selectedWebsite.name
      });
    }  else {
      this.childComponentCrud.title = 'Adauga Website-ul';
    }
    console.log(this.crudForm);
  }

  closeModalCrud() {
    this.reset();
    this.childComponentCrud.closeModal();
    this.edit = false;
  }

  openModalDelete(website: Website) {
    this.deleteWebsite = website;
    this.childComponentDelete.openModal();
  }

  closeModalDelete() {
    this.childComponentDelete.closeModal();
  }

  ngOnInit() {
    this.websiteService.index()
    .subscribe(
      (websites: Website[]) => {
        this.websites = websites;
        console.log(this.websites);
      }
    );

    this.crudForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });

    this.childComponentCrud.showFooter = false;
    this.childComponentCrud.title = 'Adauga Website-ul';
  }

  onDelete(website?: Website) {
    this.websiteService.destroy(website)
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

        const website = new Website(JSON.parse(JSON.stringify({
          id: this.selectedWebsite.id,
          name: this.crudForm.value.name
        })));
        this.websiteService.update(website)
        .subscribe(
          data => {
            this.edit = false;
            console.log(data);
            this.notifyService.success(data.message);
            for (let i = 0; i < this.websites.length; i++) {
              if (this.websites[i].id === website.id) {
                this.websites[i].name = website.name;
              }
            }
          },
          error => console.log(error)
        );
      } else {
        const website = new Website(this.crudForm.value);
        this.websiteService.store(website)
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
