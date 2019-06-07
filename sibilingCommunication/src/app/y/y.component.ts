import { Component, OnInit ,Input, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit,AfterContentChecked {
  Obj_Keys:Object;
  Obj;
  @Input() y_data;

  constructor() { }

  ngOnInit() {
   
  }
  ngAfterContentChecked(){
    this.Obj_Keys=Object.keys(this.y_data);
    this.Obj=this.y_data;
  }

}
