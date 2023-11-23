import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-wikiassign',
  templateUrl: './wikiassign.component.html',
  styleUrls: ['./wikiassign.component.css']
})
export class WikiassignComponent implements OnInit {
  wikiArr: any = [];
  inputText=' ';

  constructor(private _utilityService:UtilityService) { }

  ngOnInit():void {
   this.getData();
 
  }
  getData(){
    this._utilityService.getDatafromWiki('space').subscribe(res =>{
      console.log('data from wiki', res);
      this.wikiArr = res.query.search;
      console.log(this.wikiArr);
      
     })
  }
  getSearchData(){
    console.log(this.inputText);
    this._utilityService.subjectData(this.inputText);
    this.getData();
  }

}
