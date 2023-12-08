import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  myObservable: any;
  todaysDate = new Date();
  name: string = 'Codemind Technology';
  price: number = 20000;
  jsonData = {id: '101', name:'Jack'};
  fullname: string = 'jack sparrow';

  productArr: any[] = [
    {
      sno: 1,
      name:'Mobile',
      price: 10000,
      availibility: 'Available'
    },
    {
      sno: 2,
      name:'TV',
      price: 120000,
      availibility: 'Available'
    },{
      sno: 3,
      name:'WashingMachine',
      price: 1250000,
      availibility: 'Not Available'
    },{
      sno: 4,
      name:'Tab',
      price: 10000,
      availibility: 'Available'
    }
  ]

  namesearch : string = "";

  constructor() { }

  ngOnInit() {
   // own observable
   this.myObservable = of('Some text');

   // this.myObservable.subscribe((res: any) => {
   //   console.log('res', res);
   // })
  }
  AddProduct(product: any) {

    this.productArr.push({
      sno: 5,
      name: product,
      price: 10000,
      availibility: 'Available'
    });

    console.log(this.productArr);
  }

}
