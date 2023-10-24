import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  defaultValue: string = 'HTML';
  defaultGender:string ='Female'
  genders = [
    {id:'1', value:'Male'},
    {id:'2', value:'Female'}
  ]
  formData = {
    username:'',
    password: '',
    email: '',
    course:'',
    gender:''
  }
  isSubmitted: boolean = false;
  constructor() { }
  
  ngOnInit() {
  }
  OnSubmit(form:NgForm)
  {
    if (form.invalid) {
      return
    }
    this.isSubmitted = true;
    console.log(form);
    console.log(form.value);   // object.

    this.formData.username = form.value.userDetail.username;
    this.formData.password = form.value.userDetail.password;
    this.formData.email = form.value.email;
    this.formData.course = form.value.course;
    this.formData.gender = form.value.gender;
    
    alert('SUCCESS ! \n\n' + JSON.stringify(form.value));
    form.reset();
    form.controls['course'].setValue(this.defaultValue);
    form.controls['gender'].setValue(this.defaultGender);

  }

}
