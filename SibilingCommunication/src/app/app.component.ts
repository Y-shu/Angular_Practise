import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SibilingCommunication';
  // we create an object to hold the child component data which we are getting using
  // $event
  // now we render these stuff in our html page to get printed
  x_Obj=[];
  parentFun(e2){
   this.x_Obj=e2;
  // console.log(this.x_Obj);
  
  }

  k_Obj=[];
  k_parent_fun(Kapp_data){
    this.k_Obj=Kapp_data;
    // console.log(this.k_Obj);
    
  }
}
