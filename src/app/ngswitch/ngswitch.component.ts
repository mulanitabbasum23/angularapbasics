import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  product: string = '';
  options: string[] = ['Laptop','Mobile','TV','Washing Machine'];
  constructor() { }

  ngOnInit() {
  }
  getProductValue(val: any) {
    console.log(val.target.value);
    this.product = val.target.value;
    }

}
