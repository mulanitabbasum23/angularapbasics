import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todoList:any = [];
  constructor(private _todoService:TodoService) { }

  ngOnInit():void {
    this.getListOfTodos();

  }
  createTodo(title){
    let todo = {
      id: new Date().getTime(),
      title: title.value
    }
    this._todoService.create(todo).subscribe(res =>{
      console.log(`todo created`,res);
      this.getListOfTodos();
    
    })
  }
  getListOfTodos(){
    this._todoService.getTodos().subscribe(res =>{
      console.log(`get todo called`,res);
      this.todoList = res;
     })
  }
  editTodo(todo:any){
    let data = {
      id: new Date().getTime(),
      title: `edited todo`
    }
    this._todoService.update(todo.id, data).subscribe(res =>{
      this.getListOfTodos();
    })
  }
  deleteTodo(id:any){
    this._todoService.delete(id).subscribe(res =>{
      this.getListOfTodos();
    })
  }
}
