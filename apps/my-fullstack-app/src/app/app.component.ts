import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@myworkspace/api-interfaces';

interface Todo {
  title: string;
}



@Component({
  selector: 'myworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [{title: 'Todo 1'}, { title: 'Todo 2'}]

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
  
  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  constructor(private http: HttpClient) {
    this.fetch()
  }
}
