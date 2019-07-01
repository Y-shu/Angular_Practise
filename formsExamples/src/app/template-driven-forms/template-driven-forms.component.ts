import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  signUp:NgForm;
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

  // OnSubmit(myForm_handler){
  //   console.log(myForm_handler);
    
  // }
keysOfuser=[];
KeysOfMyform=[];
  OnSubmit(myForm_handler){
    this.submitted=true;
    console.log(myForm_handler);
    let values=myForm_handler.value
    console.log(values);
    
    if(this.submitted){
      this.keysOfuser=Object.keys(this.user)
      this.KeysOfMyform=Object.keys(values);
      console.log(this.KeysOfMyform[values]);
    // this.user.user_Name=myForm_handler.value.UserName;
    }
      
  }

}
