import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  y="true";
  arr_odd=[1,3,5,7,9];
  arr_even=[2,4,6,8,10];
  constructor() { }

  ngOnInit() {
  }

}
