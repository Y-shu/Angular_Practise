import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';


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
// Forbidden Stuff- for custom validations
forbiddenUserNames=['appi','physco','carer','karri','kindderJoy'];


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
          UserName:new FormControl(null,Validators.required,this.forbidden.bind(this)),

        // Providing one or more validators
        // this.forbiddenEmail is a async validator
        Email:new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmail)
      }),
  
      Gender:new FormControl('female'),
      // initally hobbies is an empty array when we click the button
      // new controllers supposed to be added to this array
      hobbies:new FormArray([])
    });
    // valueChanges-is a method to check the value change of a controller
// it returns an observable
// this.signUpForm.valueChanges.subscribe((changedData)=>{
//   console.log(changedData);
// })
// status changes
this.signUpForm.statusChanges.subscribe((changeStatus)=>{
console.log(changeStatus);

})
  }
  // Forbidden -customized
/*
*my variable myformcontrol is used to hold my input data and is of type FormControl
*and this method forbidden which is customized and should return Observable or promise or any kind of return type  */
forbidden(myformcontrol:FormControl):Observable<any>|Promise<any>{
  const Data=new Promise((resolve,reject)=>{
    // if that value is inside our forbiddenNames
    // indexOf checks for a value in the array if the value is not there it returns -1 
    // if it there returns 1
  if(this.forbiddenUserNames.indexOf(myformcontrol.value)!==-1){
    // this is to set error object of FormGroup to true
    // initally error is null we are adding this below nameIsForbidden:true to error object
    // and raise error
    resolve({'nameIsForbidden':true});
  }else{
    resolve(null);
  }
  })
  // console.log(this.Data);
  
  return Data;
  }
  forbiddenEmail(myformEmail:FormControl):Observable<any>|Promise<any>{
  const email=new Promise((resolve,reject)=>{
    setTimeout(()=>{
   if(myformEmail.value==='testing@gmail.in')
     resolve({'emailForbidden':true})
   else
     resolve(null)
   
  },1500);
  })
  return email;
  }
 
}
