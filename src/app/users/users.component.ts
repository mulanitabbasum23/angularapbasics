import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  users1:any;

  constructor(private _demoService: DemoService) { }

  ngOnInit():void {
    this._demoService.getuserData().subscribe(res=>{
      console.log(res);
      this.users = res;
    })
    
    this._demoService.getPosts().subscribe(res=>{
      console.log('post data',res);
      this.users1 = res;
    })
  }

}
