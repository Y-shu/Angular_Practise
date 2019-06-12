import { Component, OnInit ,Input, AfterContentInit, AfterContentChecked } from '@angular/core';
import { DataService } from '../data.service';
// @input is used to get data from parent to child
// @input is imported from angular/core
@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit,AfterContentChecked {
  // we add functionality to y_data using @input decorater
  @Input() y_data;
  Obj_Keys=[];
  Obj;
  constructor(private serv_data:DataService) { 
    console.log(  this.serv_data.getdata());
    
  
    // console.log(this.y_data);
    // this.Obj_Keys=Object.keys(this.y_data);
    // this.Obj=this.y_data;  
 }
  ngOnInit() {
    
  }
  // we write this hook to check the other component on which this component is depended
  ngAfterContentChecked(){
  // Object.Keys is the method to get keys in an object
    console.log(this.y_data);
    this.Obj_Keys=Object.keys(this.y_data);
    this.Obj=this.y_data; 
  }

}
