import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
onAddHoliday(){
  // on every button click a controller is created that supposed to be pushed on to new array
  const control= new FormControl(null,Validators.required);
  // <FormArray> is for angular to recognise
  (<FormArray>this.signUpForm.get('hobbies')).push(control);
}
  constructor() { }

  ngOnInit() {
    this.signUpForm=new FormGroup({
      // controllers--have to syncronized them to our template code
      // FormController is a constructor we can pass a couple of arguments
      // first argument is a inital state,second validators(single or array of validator)
      
      // Grouping UserName and Email
      UserData:new FormGroup({
        // validators are object got imported from formslibrary
        UserName:new FormControl(null,Validators.required),

        // Providing one or more validators
        Email:new FormControl(null,[Validators.required,Validators.email]),
      }),
  
      Gender:new FormControl('female'),
      // initally hobbies is an empty array when we click the button
      // new controllers supposed to be added to this array
      hobbies:new FormArray([])
    });
  }

}
