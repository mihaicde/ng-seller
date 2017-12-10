import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { User } from '../../../../models/User';
import { Role } from '../../../../models/Role';
import { UserService } from '../../services/user.service';
import { RolesService } from '../../services/roles.service';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {

  @ViewChild('modalCrud')
  childComponentCrud: ModalComponent;

  @ViewChild('modalDelete')
  childComponentDelete: ModalComponent;

  users: User[];
  roles: Role[];
  crudForm: FormGroup;
  selectedUser: User;
  deleteUser: User;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private userService: UserService,
    private rolesService: RolesService,
    private notifyService: NotificationService
  ) { }

  reset() {
    this.crudForm.reset();
  }

  openModalCrud(user: User) {
    this.childComponentCrud.openModal();
    if (user) {
      this.childComponentCrud.title = 'Editeaza Utilizatorul';
      this.selectedUser = user;
      this.edit = true;
      this.crudForm.patchValue({
        name: this.selectedUser.name
      });
    }  else {
      this.childComponentCrud.title = 'Adauga Utilizator';
    }
    console.log(this.crudForm);
  }

  closeModalCrud() {
    this.reset();
    this.childComponentCrud.closeModal();
    this.edit = false;
  }

  openModalDelete(user: User) {
    this.deleteUser = user;
    this.childComponentDelete.openModal();
  }

  closeModalDelete() {
    this.childComponentDelete.closeModal();
  }

  ngOnInit() {
    this.userService.index()
    .subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(this.users);
      }
    );

    this.rolesService.index()
    .subscribe(
      (roles: Role[]) => {
        this.roles = roles;
        console.log(this.roles);
      }
    );

    this.crudForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });

    this.childComponentCrud.showFooter = false;
    this.childComponentCrud.title = 'Adauga Utilizator';
  }

  onDelete(user?: User) {
    this.userService.destroy(user)
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

        const user = new User(JSON.parse(JSON.stringify({
          id: this.selectedUser.id,
          name: this.crudForm.value.name
        })));
        this.userService.update(user)
        .subscribe(
          data => {
            this.edit = false;
            console.log(data);
            this.notifyService.success(data.message);
            for (let i = 0; i < this.users.length; i++) {
              if (this.users[i].id === user.id) {
                this.users[i].name = user.name;
              }
            }
          },
          error => console.log(error)
        );
      } else {
        const user = new User(this.crudForm.value);
        this.userService.store(user)
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
