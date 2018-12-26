import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IopropertyComponent } from './ioproperty/ioproperty.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    IopropertyComponent,
    NgcontentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
