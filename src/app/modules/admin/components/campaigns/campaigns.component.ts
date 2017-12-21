import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Campaign } from '../../../../models/Campaign';
import { CampaignService } from '../../services/campaign.service';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html'
})

export class CampaignsComponent implements OnInit {

  @ViewChild('modalCrud')
  childComponentCrud: ModalComponent;

  @ViewChild('modalDelete')
  childComponentDelete: ModalComponent;

  campaigns: Campaign[];
  crudForm: FormGroup;
  selectedCampaign: Campaign;
  deleteCampaign: Campaign;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private campaignService: CampaignService,
    private notifyService: NotificationService
  ) { }

  reset() {
    this.crudForm.reset();
  }

  openModalCrud(campaign: Campaign) {
    this.childComponentCrud.openModal();
    if (campaign) {
      this.childComponentCrud.title = 'Editeaza Campanie';
      this.selectedCampaign = campaign;
      this.edit = true;
      this.crudForm.patchValue({
        name: this.selectedCampaign.name
      });
    }  else {
      this.childComponentCrud.title = 'Adauga Campanie';
    }
  }

  closeModalCrud() {
    this.reset();
    this.childComponentCrud.closeModal();
    this.edit = false;
  }

  openModalDelete(campaign?: Campaign) {
    this.deleteCampaign = campaign;
    this.childComponentDelete.openModal();
  }

  closeModalDelete() {
    this.childComponentDelete.closeModal();
  }

  ngOnInit() {
    this.campaignService.index()
    .subscribe(
      (campaigns: Campaign[]) => {
        this.campaigns = campaigns;
      }
    );

    this.crudForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });

    this.childComponentCrud.showFooter = false;
    this.childComponentCrud.title = 'Adauga Campanie';
  }

  onDelete(campaign?: Campaign) {
    this.campaignService.destroy(campaign)
    .subscribe(
      data => {
        this.notifyService.success(data.message);
      },
      err => console.log(err)
    );
    this.closeModalDelete();
  }

  onCrud() {
    if (this.crudForm.valid) {
      console.log('form submitted');
      console.log(this.crudForm.value);
      if (this.edit) {
        console.log('editing....');

        const campaign = new Campaign(JSON.parse(JSON.stringify({
          id: this.selectedCampaign.id,
          name: this.crudForm.value.name
        })));

        this.campaignService.update(campaign)
        .subscribe(
          data => {
            this.edit = false;
            console.log(data);
            this.notifyService.success(data.message);
            for (let i = 0; i < this.campaigns.length; i++) {
              if (this.campaigns[i].id === campaign.id) {
                this.campaigns[i].name = campaign.name;
              }
            }
          },
          error => console.log(error)
        );
      } else {
        const campaign = new Campaign(this.crudForm.value);
        this.campaignService.store(campaign)
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
