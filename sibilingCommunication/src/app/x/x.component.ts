import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {
  @Output() x_Event=new EventEmitter();
  x_fun(e){
    this.x_Event.emit(e)
  }
  constructor() { }

  ngOnInit() {
  }

}
