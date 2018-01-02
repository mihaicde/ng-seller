import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { AuthService } from '../../../../shared/services/auth/auth.service';
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

  categories: string[] = [
    'Restaurant',
    'Imbracaminte',
    'Medical',
    'Electronice',
    'Travel',
    'Diferit'
  ];

  types: string[] = [
    'ecommerce',
    'view'
  ];

  @ViewChild('modalCrud')
  childComponentCrud: ModalComponent;

  @ViewChild('modalDelete')
  childComponentDelete: ModalComponent;
  userDetails: any;
  websites: Website[];
  crudForm: FormGroup;
  selectedWebsite: Website;
  deleteWebsite: Website;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private authService: AuthService,
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
        name: this.selectedWebsite.name,
        domain: this.selectedWebsite.domain,
        category: this.selectedWebsite.category,
        type: this.selectedWebsite.type
      });
    }  else {
      this.childComponentCrud.title = 'Creeaza un nou Website';
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
    // Change here the values from local storage based on action
    this.userDetails = this.authService.getUser();
    this.websiteService.index()
    .subscribe(
      (websites: Website[]) => {
        this.websites = websites;
        console.log(this.websites);
      },
      error => {
        console.log(error);
        // this.notifyService.error(error.error.message);
      }
    );

    this.crudForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      domain: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });

    this.childComponentCrud.showFooter = false;
    this.childComponentCrud.title = 'Adauga Website-ul';
  }

  onDelete(website?: Website) {
    this.websiteService.destroy(website)
    .subscribe(
      data => {
        // console.log(data);
        this.notifyService.success(data.message);
      },
      error => {
        // console.log(error);
        this.notifyService.error(error);
      }
    );
    this.closeModalDelete();
  }

  onCrud() {
    if (this.crudForm.valid) {
      if (this.edit) {
        console.log('editing....');

        const website = new Website(JSON.parse(JSON.stringify({
          id: this.selectedWebsite.id,
          name: this.crudForm.value.name,
          domain: this.crudForm.value.domain,
          type: this.crudForm.value.type,
          category: this.crudForm.value.category,
          user_id: this.userDetails.id
        })));
        console.log(website);
        this.websiteService.update(website)
        .subscribe(
          data => {
            this.edit = false;
            console.log(data);
            this.notifyService.success(data.message);
            for (let i = 0; i < this.websites.length; i++) {
              if (this.websites[i].id === website.id) {
                this.websites[i].name = website.name;
                this.websites[i].domain = website.domain;
                this.websites[i].type = website.type;
                this.websites[i].category = website.category;
              }
            }
          },
          error => {
            console.log(error.error.message);
            this.notifyService.error(error.error.message);
          }
        );
      } else {
        const website = new Website( JSON.parse(JSON.stringify({
          name: this.crudForm.value.name,
          domain: this.crudForm.value.domain,
          type: this.crudForm.value.type,
          category: this.crudForm.value.category,
          user_id: this.userDetails.id
        })));
        console.log(website);
        this.websiteService.store(website)
        .subscribe(
            data => {
              this.notifyService.success(data['message']);
            },
            error => {
              console.log(error.error.message);
              this.notifyService.error(error.error.message);
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
