import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { TravelComponent } from './travel/travel.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TravelComponent],
  imports: [
    CommonModule,
    TravelRoutingModule,
    FormsModule
  ]
})
export class TravelModule { 
  constructor(){
   // console.log('TravelModule called');
    
  }
}
