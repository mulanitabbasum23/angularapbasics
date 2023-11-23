import { Component, OnInit } from '@angular/core';
import { ApihubService } from 'src/app/services/apihubtravel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
travelData:any=[];
inputData: string = ''
  constructor(private _apihubtravel:ApihubService) { }

  ngOnInit() {
    this.getTravelData();
  }
  getTravelData(){
    this._apihubtravel.getData().subscribe(res =>{
      console.log('Travel Data',res);
      this.travelData = res.data
      
    })
  }
  getSearchData(){
    console.log('Input Data:', this.inputData);
    this.getTravelData();
  }

}
