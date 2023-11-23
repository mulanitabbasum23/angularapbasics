import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnChanges,OnInit {
  @Input() userId: string | number | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called', this.userId);
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
