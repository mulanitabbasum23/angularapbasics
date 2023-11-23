import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';
import { DemoService } from '../services/demo.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  title: string = 'Top 3 Bollywood movies';
  movies: Movie[] = [
    {title: '3 Idiots', director: 'Rajkumar', cast: 'Amir khan', releaseDate:'2007'},
    {title: 'Kantara', director: 'Rishab Shetty', cast: 'Rishab Shetty', releaseDate:'2022'},
    {title: 'Tanhaji The Unsung Warrior', director: 'Om Raut', cast: 'Ajay Devgan', releaseDate:'2021'}
  ]

  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {

    this._demoService.getuserData().subscribe(res=>{
      console.log(res);
    })

    this._demoService.getPosts().subscribe(res=>{
      console.log('post data',res);
      
    })
     const obs = new Observable((observer) => {
      console.log('Data start')
      observer.next('1')
      observer.next('2')
      observer.next('3')
      observer.complete();
      observer.next('4')
      observer.next('5')
  
     })
    //  obs.subscribe({
    //   next:(val)=>{
    //     console.log(val);
    //   },
    //   error:(error)=>{
    //     console.log(error);
        
    //   },
    //   complete:()=>{
    //     console.log('Obs complete');
        
    //   }
    //  })
    obs.subscribe(res => {
      console.log(res);
    })
  }

}
