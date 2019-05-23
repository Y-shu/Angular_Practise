import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
@Output() childA=new EventEmitter<{name1:string}>();
OnClickChildABtn(){
this.childA.emit({name1:'I am Child A!'});
}
  constructor() { }

  ngOnInit() {
  }

}
