import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm} from '@angular/forms';
@Component({
  selector: 'app-formassign1',
  templateUrl: './formassign1.component.html',
  styleUrls: ['./formassign1.component.css']
})
export class Formassign1Component implements OnInit {
  genders = [
    {id:'1', value:'Male'},
    {id:'2', value:'Female'}
  ]
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form);
    

  }
}
