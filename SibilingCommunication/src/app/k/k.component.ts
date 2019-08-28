import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { MyTestServices } from '../mytest_services.service';

@Component({
  selector: 'app-k',
  templateUrl: './k.component.html',
  styleUrls: ['./k.component.css']
})
export class KComponent implements OnInit {
  @Output() k_event=new EventEmitter();
  k_fun(k_data){
    this.k_event.emit(k_data)
  }
  constructor(private mytest_serve:MyTestServices) {
    document.writeln("<h1>"+this.mytest_serve.name+"</h1>");
   }

  ngOnInit() {
  }

}
