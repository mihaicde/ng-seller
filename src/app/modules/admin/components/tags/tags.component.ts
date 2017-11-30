import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Tag } from '../../../../models/Tag';
import { TagService } from '../../services/tags.service';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @ViewChild('modalTag')
  childComponent1: ModalComponent;

  tags: Tag[];
  crudForm: FormGroup;
  selectedTag: Tag;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private tagService: TagService,
    private notifyService: NotificationService) { }

  // move these separately
  isFieldValid(field: string) {
    return !this.crudForm.get(field).valid && this.crudForm.get(field).touched;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  success() {
    this.notifyService.success('Obiectul a fost creat');
  }

  ngOnInit() {
    this.tagService.getTags()
      .subscribe(
        (tags: Tag[]) => {
          this.tags = tags;
          console.log(this.tags);
        }
      );
      this.crudForm = new FormGroup({
        name: new FormControl(null, Validators.required),
      });
  }

  onDelete(tag: Tag) {
    console.log(tag.id);
    this.tagService.destroy(tag)
    .subscribe(
      data => {
        console.log(data);
        this.notifyService.success(data.message);
      },
      err => console.log(err)
    );
  }

  onUpdate(tag: Tag) {
    this.selectedTag = tag;
    console.log(this.selectedTag);
    this.edit = true;
    this.crudForm.patchValue({
      name: this.selectedTag.name
    });
    console.log(this.crudForm);
  }

  onCrud() {
    if (this.crudForm.valid) {
      console.log('form submitted');
      console.log(this.crudForm.value);
      if (this.edit) {
        console.log('editing....');

        const tag = new Tag(JSON.parse(JSON.stringify({
          id: this.selectedTag.id,
          name: this.crudForm.value.name
        })));
        console.log(tag);
        this.tagService.update(tag)
        .subscribe(
          data => {
            this.edit = false;
            console.log(data);
            this.notifyService.success(data.message);
            for (let i = 0; i < this.tags.length; i++) {
              if (this.tags[i].id === tag.id) {
                this.tags[i].name = tag.name;
              }
            }
          },
          error => console.log(error)
        );
      } else {
        const tag = new Tag(this.crudForm.value);
        this.tagService.store(tag)
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
    } else {
      this.validateAllFormFields(this.crudForm);
    }
  }

  reset() {
    this.crudForm.reset();
  }

}
