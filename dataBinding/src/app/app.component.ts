import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // parenta='';
  // ParentA(childEvent){
  //    this.parenta=childEvent.name1;
  // }
  parenty='';
  parentY(e2){
    console.log(e2);
    this.parenty=e2.name;
    
  //  this.parenty='child y to parent-app';
  }
  parentData="It's Parent Data!";
  parentData3="It's Parent Data3!";
  CreateEvent(){
    alert('Customized Event Created!');
  }
  getData;
  Event2(e){
   this.getData=e.name;
  }
  getObj;
  objEvent(e1:Event){
    console.log(e1);
this.getObj=e1;
  }
}
