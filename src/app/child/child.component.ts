import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name: string;
  @Input() clickCounts: number;
  @Input() password:string;
  @Input() student: any;
  @Output('update')  fromChild: EventEmitter<string> = new EventEmitter<string>();
  pwd = '&ase3i$g';
  passwordLength = 8;
  addUpper = true;
  addNumbers = true;
  addSymbols = true;
  constructor() { }
  GeneratePwd(){
    this.pwd;
 
  }

  ngOnInit() {
    console.log('Value coming from parent component', this.name);
    console.log('Count', this.clickCounts);
    console.log(`Password`, this.password);
    console.log('Student info', this.student);
    
  }
  SendToParent() {
    this.fromChild.emit("Pass"); // custim event with emit value .... ()
  }
  
  }


