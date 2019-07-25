import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, interval,Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
  // method used to unsubscribe we use subscription...this should take place
  // when we are navigating to another component 
  my_Obs_Unsubscribe:Subscription;
  constructor() { 
    // interval is predefined method
    // it returns an observable
    const my_series=interval(1000);
    my_series.subscribe((data)=>{
     console.log(data);
     
    })

    // custom observable
    const my_observable=Observable.create((my_Observer:Observer<string>)=>{
       setTimeout(() => {
         my_Observer.next("first data!")
       }, 2000);
       setTimeout(() => {
         my_Observer.next('second data!')
       }, 4000);
       setTimeout(() => {
        my_Observer.next("third data!")
      }, 6000);
      setTimeout(() => {
        my_Observer.next('fouth data!')
      }, 8000);
      // setTimeout(() => {
      //   my_Observer.error('Failed!')
      // }, 5000);
      setTimeout(() => {
        my_Observer.complete()
      }, 5000);
     
    })
     this.my_Obs_Unsubscribe=my_observable.subscribe((my_log_data)=>{
      console.log(my_log_data)
      
       },(error_log)=>{
         console.log(error_log);
         
       },()=>{
         console.log('completed!');
         
       })
      //  in angular if we sunscribe something, angular takes care of
      // unsubscribing it on its own before it does we should take care of
      // unsubscribing by using life cycle hook called ngOnDestory()
      // it destorys that particular component

  }

  ngOnInit() {
    
  }
  ngOnDestroy(){
  this.my_Obs_Unsubscribe.unsubscribe();
  }
    
}
