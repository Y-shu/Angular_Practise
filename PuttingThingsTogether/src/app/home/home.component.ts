import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Welcome!';
  img_path="../../assets/imgPath.jpg";
 img;

  constructor() { }
  
  display_img(){
    
    this.img="../../assets/img.jpg";
  }
  onSave(y){
    console.log("Save Button is Clicked!",y);//we get MouseEvent object
    
  }
  ngOnInit() {
  }

}
