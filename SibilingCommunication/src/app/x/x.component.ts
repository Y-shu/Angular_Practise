import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {
  @Output() x_Event=new EventEmitter<{}>();
  // here e holds all the data of xchild_Event using $event
  // here we map x_Event to e which is holding data of xchild_Event using emit method


  // as we can instantiated a class so created an instance of it
   DataInService=new DataService();
  

  
  x_fun(e){
    this.x_Event.emit(e)
  }
  // this x_Event is sent to parent component of this component which is 
  // app component
  constructor() { 
  }
  
  ngOnInit() {
    this.DataInService.getdata();
  }

}
