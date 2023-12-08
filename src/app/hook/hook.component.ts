import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges,ContentChild,ElementRef, AfterContentChecked, AfterViewInit, AfterViewChecked, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DemoService } from '../services/demo.service';
@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnChanges,OnInit, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() userId: string | number | undefined;
  @Input() color: string | undefined;
  @ContentChild("child", { static: false}) contentChild: ElementRef;
  @ViewChild('childhook',{static:false}) viewChild: ElementRef;

  counter:any;
  num:number = 1;
  subscription: Subscription;

  constructor(private _demoService:DemoService) { 
    console.log(`HoolsComponent constructor called`);
    
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
   
    clearInterval(this.counter);
    this.subscription.unsubscribe();

  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called`,this.viewChild);
    this.viewChild.nativeElement.setAttribute('style',`color:${this.color}`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called`,this.viewChild);
    
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    this.contentChild.nativeElement.setAttribute('style',`color:${this.color}`)
    
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called', this.contentChild);

    // this.contentChild.nativeElement.setAttribute('style', 'color:green');
    this.contentChild.nativeElement.setAttribute('style',`color:${this.color}`)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

  ngOnInit(): void {
    this.subscription = this._demoService.getPosts().subscribe(res=>{
      console.log(`From hook comp post data`, res);
    });
    console.log('ngOnInit called', this.userId);
    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
  
      // API to get data from server.
     }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', this.userId);
    
    for(const propname in changes) {
      const prop = changes[propname];

      console.log('prop',prop);

      const { previousValue, currentValue, firstChange} = prop;

      console.log( `Prev value ${previousValue}`);
      console.log( `Current Value ${currentValue}`);
      console.log( `First Change ${firstChange}`);
      console.log('...........................')
    }
  }

}
