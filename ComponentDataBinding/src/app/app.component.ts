import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variable is for keys
  data_Obj:string[];
  // variable is for values
  data_values;
  // we are going to send this data to child component
message="This is a message from parent component using Input decorator";

data_fromchild;
triggred_event(e){
  this.data_fromchild=e.message_fromChild;
}

obj_triggred_event(obj_e){
  // console.log(obj_e);
  this.data_Obj=Object.keys(obj_e);
this.data_values=obj_e
  // this.data_Obj=obj_e;
  console.log(this.data_Obj);
}
// getting_keys() {
//   return Object.keys(this.data_Obj);
// }
}
