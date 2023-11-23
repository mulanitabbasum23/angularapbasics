import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm: FormGroup;
  isFormSubmmited: boolean = false;
  notAllowedNames: string[]= ['codemind', 'technology'];

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    alert('ngOnInit method called')
    //setValue
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetail': {
    //       'username': 'Jack123',
    //       'email' : 'jack@gmail.com'
    //     },
    //     'course': 'Azure',
    //     'skills': ['DotNet']
    //   })
    // }, 3000);
    
    //patchValue
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetail': {
          'username': 'RockyBhai'
        }
       })
     }, 5000);
  }
  createForm() {
    // this.myReactiveForm = new FormGroup({

    //   'userDetail': new FormGroup({        
    //     'username': new FormControl(null, [Validators.required, this.NotAllowedName.bind(this)]),
    //     'email': new FormControl(null, [Validators.required, Validators.email])
    //     // 'password': new FormControl(null,[Validators.required, Validators.minLength(8)])
    //   }),
      
    //   'course': new FormControl('Azure'),
    //   'skills': new FormArray([
    //     new FormControl(null)
    //   ])
    // })

    //Using FormBuilder
    this.myReactiveForm = this.fb.group({
      'userDetail': this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      course:['Angular'],
      skills: this.fb.array(['Azure'])
     })
  }
  Submit() {
    this.isFormSubmmited = true;
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset();
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
