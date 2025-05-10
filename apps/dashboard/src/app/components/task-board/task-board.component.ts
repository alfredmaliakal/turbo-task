import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { task } from '../../_model/task';
import { MasterService } from '../../_service/master.service';
import { CreateTaskDto } from 'libs/data/dto/task/create-task.dto';


@Component({
  selector: 'app-task-board',
  imports: [CommonModule, CdkDropListGroup, CdkDropList, CdkDrag,MatIconModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss',
})


export class TaskBoardComponent  implements OnInit {
  tasklist!: CreateTaskDto[];
  titles: string[] = [];
  workTodo: string[] = []; 
  workDone: string[] = [];
  personalTodo: string[] = [];
  personalDone: string[] = [];
  homeTodo: string[] = [];
  homeDone: string[] = [];
  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadTasks();
    
  }

  loadTasks() {
   
    this.service.Loadtasks().subscribe((items) => {


    items.forEach(item => {
        const { title, type, status } = item;
        
        // Assign tasks to the appropriate list based on type and status
        if (type === 'work') {
          if (status === 0) {
            this.workTodo.push(title);
          } else if (status === 1) {
            this.workDone.push(title);
          }
        } else if (type === 'personal') {
          if (status === 0) {
            this.personalTodo.push(title);
          } else if (status === 1) {
            this.personalDone.push(title);
          }
        } else if (type === 'home') {
          if (status === 0) {
            this.homeTodo.push(title);
          } else if (status === 1) {
            this.homeDone.push(title);
          }
        }
      });
  
  });

  }

  todo = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  deleteItem(item: any) {
  //this.todo = this.todo.filter(i => i !== item);
  // Add API call here if needed
}

editItem(item: any) {
  const newText = prompt('Edit task', item);
  if (newText) {
   // this.todo = this.todo.map(i => i === item ? newText : i);
  }
}
}
