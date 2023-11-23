import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  product: string = '';
  options: string[] = ['Laptop','Mobile','TV','Washing Machine'];
  constructor(private _demoService: DemoService) { }
  ngOnInit():void {
    this._demoService.Demo();
  }
  getProductValue(val: any) {
    console.log(val.target.value);
    this.product = val.target.value;
    }
    
}

