import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();
  modalHeader = 'Header test';
  modalBody = 'body test';

  @Input()
  modalName?: string = 'modal';
  @Input()
  title?: string;
  @Input()
  showFooter?: boolean = true;

  constructor() { }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  ngOnInit() {
  }


}


