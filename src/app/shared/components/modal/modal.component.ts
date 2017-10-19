import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();
  modalBody: string;
  // @ViewChild('lgModal') modal: MaterializeAction;

  constructor() { }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  ngOnInit() {
  }

  showModal(modalBody: string) {
    if (modalBody !== undefined) {
        this.modalBody = modalBody;
        this.openModal();
    }
  }

}


