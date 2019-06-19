import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-into',
  templateUrl: './into.component.html',
  styleUrls: ['./into.component.css']
})
export class IntoComponent implements OnInit {
arrs=["name",26,"hello jiddu"];
x=false;
oddNum=[1,3,5,7,9];
evenNum=[2,4,6,8,10];

value=5;
  constructor() { }

  ngOnInit() {
  }

}
