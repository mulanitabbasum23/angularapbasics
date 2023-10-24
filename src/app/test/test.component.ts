import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name: string= 'Niyam hi kanun hai';
  severId: number = 101;
  serverStatus: string = "Offline";
  val: string = 'This is innerHtml value';
  imgUrl: string = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=170667a&w=0&k=20&c=vKqLcyX0Qlrh8A351AA3-h2s5P46CZjh8JR6_QyV-D4=';
  data: string = 'Codemind Technology';

  constructor() { }

  ngOnInit() {
  }
  Print(){
    alert('Button called');
  }
  getServerStatus() {
    return this.serverStatus;
  }
  sendData(val: any) {
    console.log('after blur event raised', val.target.value);
    let newVal =  val.target.value;
    this.data = newVal;
  }

}
