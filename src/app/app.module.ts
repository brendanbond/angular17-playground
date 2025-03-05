import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioModule } from '@formio/angular';
import { Formio } from '@formio/js';
import premium from '@formio/premium';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

Formio.license = 'myLicenseHere';
Formio.use(premium);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
