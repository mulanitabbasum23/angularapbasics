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
import { SimpleformComponent } from './simpleform/simpleform.component';
import { BankapplicationformComponent } from './bankapplicationform/bankapplicationform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormassignTDComponent } from './formassign-td/formassign-td.component';
import { Formassign1Component } from './formassign1/formassign1.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { TodoComponent } from './todo/todo.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { YahofinComponent } from './yahofin/yahofin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WikiassignComponent } from './wikiassign/wikiassign.component';
import { BeautyComponent } from './beauty/beauty.component';
import { MakeupComponent } from './beauty/makeup/makeup.component';
import { SkincareComponent } from './beauty/skincare/skincare.component';
import { HaircareComponent } from './beauty/haircare/haircare.component';
import { FregrancesComponent } from './beauty/fregrances/fregrances.component';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { RandomuserassignComponent } from './randomuserassign/randomuserassign.component';
import { HookComponent } from './hook/hook.component';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './filter.pipe';
import { ChatgptComponent } from './chatgpt/chatgpt.component';
import { LoginchatComponent } from './chatgpt/loginchat/loginchat.component';
import { DemoService } from './services/demo.service';
import { HeadrsInterceptor } from './headers.interceptor';
import { SignupComponent } from './chatgpt/signup/signup.component';
import { RxjsComponent } from './rxjs/rxjs.component';



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
    SimpleformComponent,
    BankapplicationformComponent,
    ReactiveformComponent,
    FormassignTDComponent,
    Formassign1Component,
    UsersComponent,
    TodoComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    YahofinComponent,
    AboutusComponent,
    HomeComponent,
    ContactusComponent,
    LoginComponent,
    PagenotfoundComponent,
    WikiassignComponent,
    BeautyComponent,
    MakeupComponent,
    SkincareComponent,
    HaircareComponent,
    FregrancesComponent,
    RandomuserassignComponent,
    HookComponent,
    PipeComponent,
    FilterPipe,
    ChatgptComponent,
    LoginchatComponent,
    SignupComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    SharedModule
  ],
  providers: [DemoService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadrsInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    //console.log('AppModule called');
    
  }
 }
// this command will skip the test file
// ng g c child --skip-tests