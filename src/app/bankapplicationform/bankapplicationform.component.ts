import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bankapplicationform',
  templateUrl: './bankapplicationform.component.html',
  styleUrls: ['./bankapplicationform.component.css']
})
export class BankapplicationformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm)
  {
    console.log(form.value);
  }

}
