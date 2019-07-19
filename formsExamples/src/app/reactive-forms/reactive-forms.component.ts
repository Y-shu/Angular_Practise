import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  // assigning to an variable
  // FormGroup is a package it contain lot of classes...It will hold a form!
  // FormGroup also considerd as a constructor
  // FormController is a constructor it creates controller
signUpForm:FormGroup;
genders=['male','female'];
onSubmitting(){
  console.log(this.signUpForm);
  
}
  constructor() { }

  ngOnInit() {
    this.signUpForm=new FormGroup({
      // controllers--have to syncronized them to our template code
      // FormController is a constructor we can pass a couple of arguments
      // first argument is a inital state,second validators(single or array of validator)
      UserName:new FormControl(null),
      Email:new FormControl(null),
      Gender:new FormControl('female')
    })
  }

}
