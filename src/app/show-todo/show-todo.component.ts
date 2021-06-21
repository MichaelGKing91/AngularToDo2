import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ToDo } from '../interfaces/to-do';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  @Input() theToDo: ToDo = { task: '', complete: false };
  @Output() remove: EventEmitter<ToDo> = new EventEmitter<ToDo>();
  constructor() { }

  ngOnInit(): void {
  }


  deleteMe(){
    this.remove.emit(this.theToDo);
  }

}
