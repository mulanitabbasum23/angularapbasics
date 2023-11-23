import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName: any;

  // Inject the utility service
    constructor(private _utilityService: UtilityService) {
      this._utilityService.userName.subscribe(res => {
        console.log('res from comp2', res);
        this.userName = res;
      })
     }

  ngOnInit(): void {
  }

  updateUserName(uname: any) {
    console.log(uname.value);
    //this.userName = uname.value;

    // next method is used to send message to an observable . userName
    this._utilityService.userName.next(uname.value);
  }
}
