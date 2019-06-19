import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appStructCustomised]'
})
export class StructCustomisedDirective {
  constructor(private temp_ref:TemplateRef<any>,private vcrf:ViewContainerRef) {}
  @Input() set appStructCustomised(condition:boolean){
    if(!condition){
      // createEmbeddedView-dynamically adding an element to DOM
      this.vcrf.createEmbeddedView(this.temp_ref)
    }else{
      this.vcrf.clear();
    }
  }
}
