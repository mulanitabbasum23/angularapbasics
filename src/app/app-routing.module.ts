import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingMachineComponent } from './product/washingmachine/washing-machine.component';
import { BeautyComponent } from './beauty/beauty.component';
import { MakeupComponent } from './beauty/makeup/makeup.component';
import { SkincareComponent } from './beauty/skincare/skincare.component';
import { HaircareComponent } from './beauty/haircare/haircare.component';
import { FregrancesComponent } from './beauty/fregrances/fregrances.component';
import { AuthGuard } from './auth.guard';
import { PipeComponent } from './pipe/pipe.component';
import { ChatgptComponent } from './chatgpt/chatgpt.component';
import { LoginchatComponent } from './chatgpt/loginchat/loginchat.component';
import { YahofinComponent } from './yahofin/yahofin.component';
import { SignupComponent } from './chatgpt/signup/signup.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full' }, // localhost:4200
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  { path:'aboutus', component: AboutusComponent}, // locahost:4200/aboutus
   {path: 'contactus', component: ContactusComponent},
   {path: 'product', canActivate:[AuthGuard], component:ProductComponent, children: [
    {path: 'laptop', component: LaptopComponent}, // localhost:4200/product/laptop
    { path: 'tablet', component: TabletComponent},
    { path: 'tv', component: TvComponent},
    {path: 'washingmachine', component: WashingMachineComponent}
   ]},
   {path: 'beauty', component:BeautyComponent, children: [
    {path: 'makeup', component: MakeupComponent}, 
    { path: 'skincare', component: SkincareComponent},
    { path: 'haircare', component: HaircareComponent},
    {path: 'fregrances', component: FregrancesComponent}
   ]},
   { path: 'order', canActivate:[AuthGuard], loadChildren: ()=> import('./order/order.module').then(m=> m.OrderModule)},
  { path: 'customer', loadChildren: ()=> import('./customer/customer.module').then(c=> c.CustomerModule)},
  { path: 'travel', loadChildren: ()=> import('./travel/travel.module').then(c=> c.TravelModule)},
  { path: 'food', loadChildren: ()=> import('./food/food.module').then(c=> c.FoodModule)},
  {path:'pipe', component:PipeComponent},
  {path: 'rapidapi', component: YahofinComponent},
  {path:'chatgpt', children:[
    {path:'',component:ChatgptComponent},
    {path: 'loginchat', component:LoginchatComponent},
    {path:'signup',component:SignupComponent }
  ]},
  {path:'rxjs',component:RxjsComponent},
   {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }





   