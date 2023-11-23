import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  userName: any;
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
    this.userName = uname.value;  // comp4

    // next method is used to send message to an observable . userName
    this._utilityService.userName.next(uname.value);
  }
}
