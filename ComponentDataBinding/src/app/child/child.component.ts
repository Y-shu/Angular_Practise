import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //here message_fromParent is customized property
  // we assign Input decorator to customized property
  // Input decorator is used to get data from parent to child 
  @Input() message_fromParent:string;
// Output decorator is 
  @Output() click_me= new EventEmitter<{message_fromChild:string}>();
  createEvent(event){
    this.click_me.emit({
      message_fromChild:"This message is from child to parent using Output decorator"
    })
  }
  @Output() obj_click=new EventEmitter<{name:string,age:number,message:string}>();
  createObjEvent(ObjEvent){
    this.obj_click.emit({
      name:"yashu",
      age:26,
      message:"Good Luck Object Itterartion"

    })
  }
 constructor() { }

  ngOnInit() {
  }

}
