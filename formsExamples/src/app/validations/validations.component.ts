import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {
  
  submitted=false;
  user={
    user_Name:'',
    email:'',
    selected:''
  };
  defaultQuestion="pet";
  genders=['male','female'];
  defaultGender=this.genders[1];
  answer='';
  constructor() { 
  }
  
  
  ngOnInit() {
  }
      Suggested(){
        const suggestedName="yashu"

      };
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
    this.user.user_Name=myForm_handler.controls.grouping.value.UserName;
    
    
  }


}
