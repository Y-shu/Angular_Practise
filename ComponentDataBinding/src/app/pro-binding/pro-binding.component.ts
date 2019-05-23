import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-binding',
  templateUrl: './pro-binding.component.html',
  styleUrls: ['./pro-binding.component.css']
})
export class ProBindingComponent implements OnInit {
  my_image="../../assets/img.jpg";
  my_img="../../assets/image1.jpg";
  my_pic="../../assets/img1.jpg";
  buttonStatus=false;
  btnStauts='enabled';
  constructor() { }

  ngOnInit() {
  }

}
