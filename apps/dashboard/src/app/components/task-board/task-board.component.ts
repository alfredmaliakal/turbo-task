import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { CreateTaskDto } from 'libs/data/dto/task/create-task.dto';

@Component({
  selector: 'app-task-board',
  imports: [
    CommonModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatIconModule,
  ],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.scss',
})
export class TaskBoardComponent {
  @Input() tasksByStatus: { [status: number]: CreateTaskDto[] } = {
    0: [],
    1: [],
  };

  drop(event: CdkDragDrop<CreateTaskDto[]>) {
    console.log(event);
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
    // Add API call here if needed
  }

  editItem(item: any) {
    const newText = prompt('Edit task', item);
    if (newText) {
      // Add API call here if needed
    }
  }
}
