import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-yahofin',
  templateUrl: './yahofin.component.html',
  styleUrls: ['./yahofin.component.css']
})
export class YahofinComponent implements OnInit {

  // Inject the service DI
  constructor(private _rapidApiService: RapidapiService) { }

  ngOnInit(): void {

    this._rapidApiService.getYahooFinance().subscribe(res => {
      console.log('Rapid API called successfully', res);
    });
    
    this._rapidApiService.getstocksummary().subscribe(res => {
      console.log('get stock summery', res);
    })
  }
}