import { Component, OnInit } from '@angular/core';
import { of,interval,from,timer } from 'rxjs';
import { map,filter,take,takeLast,takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  randomNames = ['jack','codemind','harry','angular','javascript']

  constructor() { }

  ngOnInit() {
    //map operator
    // let observable = of(1,2,3);
  
    // observable.pipe(
    //   map(x => x * 10)
    // ).subscribe( res => {
    //   console.log(res);
    // })

    //filter operator
  //   var obsOf = of(2,3,22,5,60,1);

  //  obsOf.pipe(
  //   filter(data => data % 2 !=0)
  //  ).subscribe( res => {
  //   console.log(res);
  //  });
  //  var obsOf = of(2,3,22,5,60,1);

  //  obsOf.pipe(
  //   filter(data => data % 2 !=0)
  //  ).subscribe( res => {
  //   console.log(res);
  //  });
   //take operator
   let obsInterval = interval(1000);

   obsInterval.pipe(
    take(5)
   ).subscribe(res => {
    console.log(res);
   })
     // takeLast 2

  let obsFrom = from(this.randomNames);
  
  obsFrom.pipe(
    takeLast(2)
  ).subscribe(res => {
    console.log('random names', res);
  });

  
  takeUntil

  let source = interval(1000);

  let condition = timer(10000); 

  source.pipe(
    takeUntil(condition)
  ).subscribe(res => {
    console.log('take Until', res);
  })
 
  }




}