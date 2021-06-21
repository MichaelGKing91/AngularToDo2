import { Component, Input, ɵɵsetComponentScope } from '@angular/core';
import { ToDo } from './interfaces/to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDo2';
  @Input() searchbox: string = '';

  theTasks: ToDo[] = [
    {
      task: 'Wash clothes',
      complete: false
    },
    {
      task: 'Vacuum',
      complete: false
    },
    {
      task: 'Tune piano',
      complete: false
    },
    {
      task: 'Mow grass',
      complete: false
    }
  ];

  deleteOneTodo(whichTodo: ToDo){
    for(let i = 0; i < this.theTasks.length; i++){
      if(this.theTasks[i] == whichTodo){
        this.theTasks.splice(i,1);
        break;
      }
    }
    if(this.searchResults.length > 0){
      this.clearSearch();
    }
  }

  searchResults: ToDo[] = [];
  clickSearch(){
    let re = RegExp(this.searchbox, 'i'); // 'i' is case insensitive
    //let results: ToDo[] = [];
    this.searchResults.splice(0, this.searchResults.length);
    for(let i = 0; i < this.theTasks.length; i++){
      if(this.theTasks[i].task.match(re)){
        //console.log(this.theTasks[i])
        this.searchResults.push(this.theTasks[i]);
      }
    } 
    //console.log(results);
    //this.searchResults = results; 
  }

  clearSearch(){
    this.searchResults.splice(0, this.searchResults.length);
    this.searchbox = '';
  }

  
}
