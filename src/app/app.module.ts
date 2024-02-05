import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component'
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
