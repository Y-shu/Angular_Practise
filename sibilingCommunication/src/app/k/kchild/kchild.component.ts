import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kchild',
  templateUrl: './kchild.component.html',
  styleUrls: ['./kchild.component.css']
})
export class KchildComponent implements OnInit {
  @Output() kchild_event=new EventEmitter<{name:string,message:string}>();
  kchild_fun(){
    this.kchild_event.emit({
      name:"K-Child",
      message:"Hello this is K-Child!"
    })
  }
  constructor() { }

  ngOnInit() {
  }

}
