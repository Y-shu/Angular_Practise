import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  @ViewChild('myForm',{static:true}) signUp:NgForm;
  submitted=false;
  user={
    user_Name:'',
    email:'',
    selected:''
  };
  reset(){
    this.signUp.reset();
  }
  data=true;
  // --------------------SETVALUES-----------------
  Suggested(){
      const suggestedName="pinky";
    //   setValue is used to set default values
    this.signUp.form.setValue({
      grouping:{
          UserName:'pinky',
          email:'pinky@gmail.com'
      },
      select:'pet',
      questionAnswer:'jimmy',
      gender:'female'
  })
// ------------------------PATCH----------------------------
      // this.signUp.form.patchValue({
      //   grouping:{
      //       UserName:'pinky'
      //   }
      // })
  }
  defaultQuestion="pet";
  genders=['male','female'];
  defaultGender=this.genders[1];
  answer='';
  constructor() { }

  ngOnInit() {
  }

  obj_values;
  values;
  KeysOfMyform=[];
  OnSubmit(){
    this.submitted=true;
    this.values=this.signUp.value;
    console.log(this.signUp);
    
    // console.log(this.values);
    
    if(this.submitted){
      this.KeysOfMyform=Object.keys(this.values);//to get keys
      this.obj_values=Object.values(this.values);//to get values
      // console.log(this.obj_values);
      // console.log(this.KeysOfMyform);
    }
      this.user.user_Name=this.signUp.controls.grouping.value.UserName;
  }

}
