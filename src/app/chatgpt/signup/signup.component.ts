import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
visible:boolean=false;

  constructor(private _formBuilder: FormBuilder, private _httpClient: HttpClient, private router:Router) { }

  ngOnInit() {
    this.signupForm = this._formBuilder.group({
      userName:[''],
      email:[''],
      password:['']
    })
  }
  signup(){
    this._httpClient.post<any>('http://localhost:3000/signupuser',this.signupForm.value).subscribe(res=>{
      alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['/chatgpt/loginchat'])
    }),err=>{
      alert("Something went wrong")
    }
  }
  viewpass(){
    this.visible = !this.visible;
  }
}
