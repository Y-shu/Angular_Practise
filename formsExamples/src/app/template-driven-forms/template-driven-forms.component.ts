import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  // purpose of submitted here is to control visibility
  submitted=false;
  user={
    user_Name:'',
    email:'',
    selected:''
  };
  constructor() { 
  }

  ngOnInit() {
  }
  obj_values;
  values;
  KeysOfMyform=[];
  OnSubmit(myForm_handler:NgForm){
    this.submitted=true;
    console.log(myForm_handler);
    this.values=myForm_handler.value;
    console.log(this.values);
    
    if(this.submitted){
      this.KeysOfMyform=Object.keys(this.values);//to get keys
      this.obj_values=Object.values(this.values);//to get values
      // console.log(this.obj_values);
      // console.log(this.KeysOfMyform);
    }
      
  }

}
