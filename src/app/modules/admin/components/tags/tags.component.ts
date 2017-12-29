import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilderService } from '../../../../shared/services/form-builder.service';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Tag } from '../../../../models/catalogue/Tag';
import { TagService } from '../../services/tags.service';

import { Notification } from '../../../../shared/models/Notification';
import { NotificationService } from '../../../../shared/services/notification.service';
import { NotificationComponent } from '../../../../shared/components/notification/notification.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html'
})
export class TagsComponent implements OnInit {

  @ViewChild('modalTagCrud')
  childComponentTag: ModalComponent;

  @ViewChild('modalTagDelete')
  childComponentTagDelete: ModalComponent;

  tags: Tag[];
  crudForm: FormGroup;
  selectedTag: Tag;
  deleteTag: Tag;
  edit = false;

  @ViewChild('toast')
  notificationComp: NotificationComponent;

  constructor(
    private formBuilderService: FormBuilderService,
    private tagService: TagService,
    private notifyService: NotificationService) { }

  openModalTag(tag?: Tag) {
    this.childComponentTag.openModal();
    if (tag) {
      this.childComponentTag.title = 'Editeaza Tag';
      this.selectedTag = tag;
      console.log(this.selectedTag);
      this.edit = true;
      this.crudForm.patchValue({
        name: this.selectedTag.name
      });
    }  else {
      this.childComponentTag.title = 'Adauga Tag';
    }
    console.log(this.crudForm);
  }

  closeModalTag() {
    this.reset();
    this.childComponentTag.closeModal();
    console.log('closing tag');
    this.edit = false;
  }

  openModalTagDelete(tag?: Tag) {
    console.log(tag);
    this.deleteTag = tag;
    console.log(this.deleteTag);
    this.childComponentTagDelete.openModal();
  }

  closeModalTagDelete() {
    this.childComponentTagDelete.closeModal();
  }

  ngOnInit() {
    this.tagService.index()
      .subscribe(
        (tags: Tag[]) => {
          this.tags = tags;
          console.log(this.tags);
        }
      );
      this.crudForm = new FormGroup({
        name: new FormControl(null, Validators.required),
      });

      this.childComponentTag.showFooter = false;
      // this.childComponentTag.modalName = 'modal4 aici';
      // this.childComponentTag.modalBody = 'yey';
      this.childComponentTag.title = 'Adauga Tag';
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
    this.closeModalTagDelete();
  }

  // onUpdate(tag: Tag) {
  //   this.openModalTag();
  //   this.selectedTag = tag;
  //   console.log(this.selectedTag);
  //   this.edit = true;
  //   this.crudForm.patchValue({
  //     name: this.selectedTag.name
  //   });
  //   console.log(this.crudForm);
  // }

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
              this.notifyService.success(data['message']);
            },
            error => {
              console.log(error);
              throw new Error(error);
            }
        );
      }
      this.reset();
      this.closeModalTag();
    } else {
      this.formBuilderService.validateAllFormFields(this.crudForm);
    }
  }

  reset() {
    this.crudForm.reset();
  }

}
