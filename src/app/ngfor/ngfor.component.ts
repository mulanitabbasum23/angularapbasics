import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

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

  constructor() { }

  ngOnInit() {
  }

}
