import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntoComponent } from './into/into.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomisedDirective } from './customised.directive';
import { StructCustomisedDirective } from './struct-customised.directive';

@NgModule({
  declarations: [
    AppComponent,
    IntoComponent,
    AttributeDirectiveComponent,
    CustomisedDirective,
    StructCustomisedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
