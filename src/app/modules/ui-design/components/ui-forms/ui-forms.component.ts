import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-forms',
  templateUrl: './ui-forms.component.html',
  styleUrls: ['./ui-forms.component.css']
})
export class UiFormsComponent implements OnInit {

  select1 : Array<object> = [
    {
      "key" : "1",
      "value": "Option 1"
    },
    {
      "key" : "2",
      "value": "Option 2"
    },
    {
      "key" : "3",
      "value": "Option 3"
    }
  ];

  selectOpt : Array<object> = [
    {
      "name" : "Group 1",
      "group" : [
        {
          "key" : "1",
          "value": "Option 1"
        },
        {
          "key" : "2",
          "value": "Option 2"
        },
      ]
    },
    {
      "name" : "Group 2",
      "group" : [
        {
          "key" : "3",
          "value": "Option 3"
        },
        {
          "key" : "4",
          "value": "Option 4"
        },
      ]
    }, 
  ];

  selectImages : Array<object> = [
    {
      "key" : "1",
      "value": "Option 1",
      "image": "assets/images/ui/laptop1.jpeg"
    },
    {
      "key" : "1",
      "value": "Option 1",
      "image": "assets/images/ui/laptop2.jpg"
    },
    {
      "key" : "1",
      "value": "Option 1",
      "image": "assets/images/ui/pexels-photo-227417.jpeg"
    }
  ];

  constructor() { }

  ngOnInit() {
    for (let i of this.selectOpt) {
      console.log(i['name']); // Shows Group 1
      console.log(i['group']); // Shows array for group
      let k = i['group'];
      for (let j in k) {
        // console.log(j);
        console.log(k[j]); // Shows {key: "1", value: "Option 1"}
        console.log(k[j]['key']);  // Shows 1
        console.log(k[j]['value']); // Shows Option 1
      }
    }
  }

  

}
