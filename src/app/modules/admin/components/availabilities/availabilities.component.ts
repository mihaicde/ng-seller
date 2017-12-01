import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Availability } from '../../../../models/Availability';
import { AvailabilityService } from '../../services/availability.service';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';

@Component({
  selector: 'app-availabilities',
  templateUrl: './availabilities.component.html'
})
export class AvailabilitiesComponent implements OnInit {

  @ViewChild('modalAvailabilityCrud')
  childComponentAvailability: ModalComponent;

  @ViewChild('modalAvailabilityDelete')
  childComponentAvailabilityDelete: ModalComponent;

  availabilities: Availability[];
  crudForm: FormGroup;
  selectedAvailability: Availability;
  deleteAvailability: Availability;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private availabilityService: AvailabilityService,
    private notifyService: NotificationService) { }

  openModalAvailability(availability?: Availability) {
    this.childComponentAvailability.openModal();
    if (availability) {
      this.childComponentAvailability.title = 'Editeaza Disponibilitate';
      this.selectedAvailability = availability;
      console.log(this.selectedAvailability);
      this.edit = true;
      this.crudForm.patchValue({
        name: this.selectedAvailability.name
      });
    }  else {
      this.childComponentAvailability.title = 'Adauga Disponibilitate';
    }
    console.log(this.crudForm);
  }

  closeModalAvailability() {
    this.reset();
    this.childComponentAvailability.closeModal();
    console.log('closing availability');
    this.edit = false;
  }

  openModalAvailabilityDelete(availability?: Availability) {
    console.log(availability);
    this.deleteAvailability = availability;
    console.log(this.deleteAvailability);
    this.childComponentAvailabilityDelete.openModal();
  }

  closeModalAvailabilityDelete() {
    this.childComponentAvailabilityDelete.closeModal();
  }

  ngOnInit() {
    this.availabilityService.getTags()
    .subscribe(
      (availabilities: Availability[]) => {
        this.availabilities = availabilities;
        console.log(this.availabilities);
      }
    );
    this.crudForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });

    this.childComponentAvailability.showFooter = false;
    this.childComponentAvailability.title = 'Adauga Disponibilitate';

  }

  onDelete(availability?: Availability) {
    console.log(availability.id);
    this.availabilityService.destroy(availability)
    .subscribe(
      data => {
        console.log(data);
        this.notifyService.success(data.message);
      },
      err => console.log(err)
    );
    this.closeModalAvailabilityDelete();
  }

  reset() {
    this.crudForm.reset();
  }

  onCrud() {
    if (this.crudForm.valid) {
      console.log('form submitted');
      console.log(this.crudForm.value);
      if (this.edit) {
        console.log('editing....');

        const tag = new Availability(JSON.parse(JSON.stringify({
          id: this.selectedAvailability.id,
          name: this.crudForm.value.name
        })));
        console.log(tag);
        this.availabilityService.update(tag)
        .subscribe(
          data => {
            this.edit = false;
            console.log(data);
            this.notifyService.success(data.message);
            for (let i = 0; i < this.availabilities.length; i++) {
              if (this.availabilities[i].id === tag.id) {
                this.availabilities[i].name = tag.name;
              }
            }
          },
          error => console.log(error)
        );
      } else {
        const availability = new Availability(this.crudForm.value);
        this.availabilityService.store(availability)
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
      this.closeModalAvailability();
    } else {
      this.formBuilderService.validateAllFormFields(this.crudForm);
    }
  }

}
