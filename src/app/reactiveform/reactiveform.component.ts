import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm: FormGroup;
  isFormSubmmited: boolean = false;
  notAllowedNames: string[]= ['codemind', 'technology'];

  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.myReactiveForm = new FormGroup({

      'userDetail': new FormGroup({        
        'username': new FormControl(null, [Validators.required, this.NotAllowedName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email])
        // 'password': new FormControl(null,[Validators.required, Validators.minLength(8)])
      }),
      
      'course': new FormControl('Azure'),
      'skills': new FormArray([
        new FormControl(null)
      ])
    })
  }
  Submit() {
    this.isFormSubmmited = true;
    console.log(this.myReactiveForm);
  }
  get skills(): FormArray{
    return this.myReactiveForm.get('skills')as FormArray
  }
  OnAddSkills(){
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null));
  }
  RemoveSkills(index:number){
    (<FormArray>this.myReactiveForm.get('skills')).removeAt(index);
  }
  NotAllowedName(control: FormControl) {
    
    if (this.notAllowedNames.indexOf(control.value) !== -1) {

      return {'nameIsNotAllowed': true};
      
    } else {
      return null;
    }
  }

}
