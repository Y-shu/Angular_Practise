import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Inorder to use forms-TemplateDrivenForms
// Inorder to use Reactive Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule,Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ParamTestComponent } from './param-test/param-test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ParamTestComponent
  ],
  imports: [
    BrowserModule,
    // template driven forms
    FormsModule,
    // reactive forms
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
