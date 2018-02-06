import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-block',
  templateUrl: './icon-block.component.html'
})
export class IconBlockComponent implements OnInit {

  @Input()
  sectionArray: Array<Object>;

  constructor() { }

  ngOnInit() {
    console.log(this.sectionArray);
  }

}
