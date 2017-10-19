import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();
  // modalHeader: string;
  // modalBody: string;
  modalHeader = 'Header test';
  modalBody = 'body test';

  @Input()
  modalName?: string = 'modal';
  @Input()
  title?: string;
  @Input()
  showFooter?: boolean = true;

  // @ViewChild('modalChild') modalChild: EventEmitter<any> = new EventEmitter<string|MaterializeAction>();
  // @ViewChild('modalChild') modalChild = new EventEmitter<string|MaterializeAction>();

  openModal() {
    // console.log("child openModal function");
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  constructor() { }

  // showModal(modalHeader?: string, modalBody?: string ) {
  //   if (modalHeader !== undefined) {
  //     this.modalHeader = modalHeader;
  //   }
  //   if (modalBody !== undefined) {
  //       this.modalBody = modalBody;
  //   }
  //   this.openModal();
  // }

  ngOnInit() {
    // this.openModal();
  }

}
