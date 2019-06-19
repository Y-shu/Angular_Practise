import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomised]'
})
// Difference between directive and component?
/*
*directive have @Directive decorator and component
have @Component decorator
*component have html and css file whereas
directive will not have them 
*/ 
export class CustomisedDirective {
// element ref referes to an element---directly goes to native elements in DOM
// so its not good 
// so we use "Renderer2"
  // constructor(private eleRef:ElementRef) { 
  //   this.eleRef.nativeElement.style.backgroundColor="red";

  // reneder2 is consider to be best approach method
  constructor(private eleRef:ElementRef,private render:Renderer2) { 
    // this will not directly effect native elements
    // setStyle methods consists of 3parameters-
    // 1.which element we want to style(elementref)
    // 2.which style to set
    // 3.define value for the style
    // 4.flag(optional)

    
    this.render.setStyle(this.eleRef.nativeElement,'backgroundColor','blue');

   
  }

}
