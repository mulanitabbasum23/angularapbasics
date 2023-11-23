import { Component, OnInit } from '@angular/core';
import { ApihubfoodService } from 'src/app/services/apihubfood.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodData:any;

  constructor(private _apihubfood: ApihubfoodService) { }

  ngOnInit() {
    this.getFoodData();
  }
  getFoodData(){
    this._apihubfood.getData().subscribe(res=>{
      console.log('Food Data:',res);
      this.foodData=res.d;
      console.log(this.foodData);
      
    })
  }

}
