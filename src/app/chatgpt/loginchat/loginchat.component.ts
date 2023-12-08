import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginchat',
  templateUrl: './loginchat.component.html',
  styleUrls: ['./loginchat.component.css']
})
export class LoginchatComponent implements OnInit {
loginForm:FormGroup;
visible:boolean=false;
  constructor(private _formBuilder:FormBuilder, private _httpClient:HttpClient,private router:Router) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    this._httpClient.get<any>('http://localhost:3000/signupuser').subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (user) {
        alert("Login successfully");
        this.loginForm.reset();
      }else{
        alert('User not found')
      }
    }),err=>{
      alert('Something went wrong!!!')
    }

  }
  viewpass(){
    this.visible = !this.visible;
  }
  
}
