import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  /*
  *formGroup is a considered as constructor with many classes and it helps to
  create controllers.It holds our form in declared variable... */
  signIn:FormGroup;
  mySubmit(){
    console.log( this.signIn);
  }
  // forbidden stuff-customized validations
  forbiddenName=['appi','physco','carer','karri','kindderJoy'];

  constructor() { }

  ngOnInit() {
    /* instantiating our constructor
     *below are called as formControllers and they are constructors with a couple of arguments.
     *we have to syncronized these controllers to our template code
     *first argument is a initial stage and the second is validator(single or array of arguments)
*/
    this.signIn=new FormGroup({
      // Grouping UserName and Email
      UserData:new FormGroup({
        // Validators are objects got imported from formslibrary
        UserName:new FormControl(null,Validators.required,this.myForbidden.bind(this)),
        Email:new FormControl(null,[Validators.required,Validators.email],this.forbidden_email),
        Password: new FormControl(null,[Validators.required])
        })
    })
 
  }

// Forbidden method should return an observable or promise
myForbidden(my_form_handler:FormControl):Observable<any>|Promise<any>{
      const my_forbidden=new Promise((resolve,reject)=>{
        // indexOf checks for the provided value is inside array or not
        // if values is there it returns 1 if not it returns -1
        if(this.forbiddenName.indexOf(my_form_handler.value)!==-1){
          resolve({'setErrorTo':true});
        }else{
          resolve(null);
        }
});
return my_forbidden;
}

forbidden_email(my_form_email:FormControl):Observable<any>|Promise<any>{
  const my_forbiddenEmail=new Promise((resolve,reject)=>{

    if(my_form_email.value==='test@gmail.com'){
     resolve({'setErrorToTrue':true})
    }else{
      resolve(null)
    }
  })
  return my_forbiddenEmail;
}

}
