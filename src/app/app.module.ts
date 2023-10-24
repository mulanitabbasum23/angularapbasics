import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ChildEmployeeComponent } from './child-employee/child-employee.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomdirDirective } from './customdir.directive';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { BankapplicationformComponent } from './bankapplicationform/bankapplicationform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormassignTDComponent } from './formassign-td/formassign-td.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChildComponent,
    ChildEmployeeComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    NgstyleComponent,
    NgclassComponent,
    CustomdirDirective,
    SimpleformComponent,
    BankapplicationformComponent,
    ReactiveformComponent,
    FormassignTDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// this command will skip the test file
// ng g c child --skip-tests