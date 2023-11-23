import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-randomuserassign',
  templateUrl: './randomuserassign.component.html',
  styleUrls: ['./randomuserassign.component.css']
})
export class RandomuserassignComponent implements OnInit {
  randomUser: any;

  constructor(private _utilityService: UtilityService) { }

  ngOnInit() {
    this.getData();
  }
  
  getData(){
    this._utilityService.getDatafromRandomUser().subscribe(res =>{
      console.log(res);
      this.randomUser = res.results;
      console.log(`random user data:`, this.randomUser);
    })
  }

}
