import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-employee',
  templateUrl: './child-employee.component.html',
  styleUrls: ['./child-employee.component.css']
})
export class ChildEmployeeComponent implements OnInit {
  @Output('employee')  fromChildEmp: EventEmitter<string> = new EventEmitter<string>();
  empName: string = "Jack";
  company: string = "Google";
  empId:number = 123;
  mailId: string = "jack23@gmail.com";
  salary: number = 45000
  constructor() { }

  ngOnInit() {
  }
  SendToParentEmp(){
    console.log(`------------- Employee Information -------------`);
    console.log('Employee name:',this.empName);
    console.log('Company name:',this.company);
    console.log('Employee Id:',this.empId);
    console.log('Employee emailId:',this.mailId);
    console.log('Employee salary:',this.salary);
  }

}
