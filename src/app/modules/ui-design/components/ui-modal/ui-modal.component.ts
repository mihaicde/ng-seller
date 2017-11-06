import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-parent',
  templateUrl: './ui-modal.component.html'
})
export class UiModalComponent implements OnInit {

  @ViewChild('modal1')
  childComponent1: ModalComponent;
  @ViewChild('modal2')
  childComponent2: ModalComponent;
  @ViewChild('modal3')
  childComponent3: ModalComponent;
  @ViewChild('modal4')
  childComponent4: ModalComponent;


  modal_header1 = 'Header1';
  modal_header2 = 'Header2';
  modal_content1 = 'Modal 1 content test blabla';
  modal_content2 = 'Modal 2 content test blabla';


  modalName3 = 'third button';

  constructor() { }

  ngOnInit() {
    this.childComponent2.showFooter = false;
    this.childComponent2.modalName = 'button 2';

    this.childComponent4.modalHeader = 'lalalal';
    this.childComponent4.showFooter = true;
    this.childComponent4.modalName = 'modal4 aici';
    this.childComponent4.modalBody = 'yey';
    this.childComponent4.title = 'testeeee';


  }

  action() {
    alert('Action granted');
  }

  reset() {
    console.log('reset');
  }

  openModal4() {
    this.childComponent4.openModal();
  }

  closeModal4() {
    this.childComponent4.closeModal();
  }

  onCrud(cacat: string) {
    console.log(cacat);
    this.closeModal4();
  }

  openModal3() {
    this.childComponent3.openModal();
  }

}
