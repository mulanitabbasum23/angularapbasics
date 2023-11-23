import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomdirDirective } from '../customdir.directive';



@NgModule({
  declarations: [
    CustomdirDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomdirDirective
  ]
})
export class SharedModule { }
