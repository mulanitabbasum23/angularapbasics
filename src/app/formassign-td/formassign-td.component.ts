import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm} from '@angular/forms';
@Component({
  selector: 'app-formassign-td',
  templateUrl: './formassign-td.component.html',
  styleUrls: ['./formassign-td.component.css']
})
export class FormassignTDComponent implements OnInit {
  imageUrl: string = "https://storage.prompt-hunt.workers.dev/clh27cjch000ql908s83bzfu5_1"

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form);
    

  }

}
