import { Component, OnInit } from '@angular/core';

interface Task {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';

  ngOnInit(): void { }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newId = this.tasks.length + 1;
      this.tasks.push({
        id: newId,
        content: this.newTask,
        completed: false,
      });
      this.newTask = '';
    }
  }

  markAsCompleted(task: Task): void {
    task.completed = true;
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
