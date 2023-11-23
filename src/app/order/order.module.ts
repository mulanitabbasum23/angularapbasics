import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderlistComponent } from './orderlist/orderlist.component';


@NgModule({
  declarations: [OrderlistComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { 
  constructor(){
    //console.log('OrderModule called');
    
  }
}
