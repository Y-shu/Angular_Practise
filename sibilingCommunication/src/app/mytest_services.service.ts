import { Injectable } from '@angular/core';
import { TestServicesService } from './test-services.service';

@Injectable()
export class MyTestServices{
    name="kittu";
    constructor(private serveTest:TestServicesService){
       
       document.writeln("<h1>"+this.serveTest.name_serve+"</h1>")
    }
}