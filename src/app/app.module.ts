import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IopropertyComponent } from './ioproperty/ioproperty.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestComponent } from './http-test/http-test.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
@NgModule({
  declarations: [
    AppComponent,
    IopropertyComponent,
    NgcontentComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
