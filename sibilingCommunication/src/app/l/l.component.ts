import { Component, OnInit ,Input, AfterContentChecked, AfterViewChecked, OnChanges, DoCheck, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-l',
  templateUrl: './l.component.html',
  styleUrls: ['./l.component.css']
})
export class LComponent implements OnInit,AfterContentInit{
  @Input() l_data;
  Obj_l_keys=[];
  l_obj;
  constructor() { }
  
  ngOnInit() {
   
  }
  ngAfterContentInit(){
    this.Obj_l_keys=Object.keys(this.l_data);
    console.log(this.l_data);
    
    this.l_obj=this.l_data
  }

}
