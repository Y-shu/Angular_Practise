import { Injectable } from '@angular/core';
import { MainServiceService } from './main-service.service';

/*
*What is service?
A service is a class which acts as central repository or
control business unit

Uses:
it provides data
duplication of code

two ways to create services:
1.command:
 ng g s service_name

2.mannual:
export class
write logic in that
keep it in provides in app.module.ts(so that angular can identifie)
now inject it in a component's constructor--dependency injector

Another way of using a service is :
import it into a component
and as it is a class
instantiate it by created instance out of it
and use it where ever we need it...
BUT INTANTIATING IS NOT GOOD METHOD


When we are writting one service into another service we should
import @Injectable() from @angular/core

Dependency Injection is a 
a dependency is something a class of our will depend on another class.
that class can be another class or service...

as we are creating one service at time and using it n no.of times
this is called SINGLETON
*/ 
 
@Injectable()
export class DataService{
    constructor(private MainService:MainServiceService){}
arr=[{
    name:"yashu",
    message:"working on services"
},
{
    name:"kittu",
    message:"Have to work on directives"
}];
y_name="karthik";
getdata(){
    for(var i=0;i<this.arr.length;i++){
        var iterate=this.arr[i];
document.writeln("data from Service :" +"Name :"+iterate.name +"<br>"+
"Message :"+iterate.message+"<br>"+"age : "+this.MainService.getage()+"<br>")
    }
    
    // document.writeln("<h1>Data From a Service</h1>")
    // return this.arr[0];
    // return this.y_name;
    
};
}