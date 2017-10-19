import { Component, OnInit, ViewChild } from '@angular/core';

import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  @ViewChild('modal1')
  childComponent1: ChildComponent;
  @ViewChild('modal2')
  childComponent2: ChildComponent;
  @ViewChild('modal3')
  childComponent3: ChildComponent;

  modal_header1 = 'Header1';
  modal_header2 = 'Header2';
  modal_content1 = 'Modal 1 content test blabla';
  modal_content2 = 'Modal 2 content test blabla';

  modalName3 = 'third button';

  constructor() { }

  ngOnInit() {
    this.childComponent2.showFooter = false;
    this.childComponent2.modalName = 'button 2';
  }

  action() {
    alert('Action granted');
  }

  reset() {
    console.log('reset');
  }
}
