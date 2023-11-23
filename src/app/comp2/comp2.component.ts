import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
    this.userName = uname.value;

    // next method is used to send message to an observable . userName
    this._utilityService.userName.next(uname.value);
  }
}
