import { Component, OnInit,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {
  @Output() childy = new EventEmitter<{name:string}>();
childymethod(){
  this.childy.emit({name:'yashu'});
}
  constructor() { }

  ngOnInit() {
  }

}
