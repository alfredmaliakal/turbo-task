import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CdkDrag, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { MasterService } from '../../_service/master.service';
import { CreateTaskDto } from 'libs/data/dto/task/create-task.dto';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TaskBoardComponent } from '../task-board/task-board.component';

@Component({
  selector: 'app-task-tab',
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TaskBoardComponent,
  ],
  templateUrl: './task-tab.component.html',
  styleUrl: './task-tab.component.scss',
})
export class TaskTabComponent implements OnInit {
  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  tasklist!: CreateTaskDto[];
  titles: string[] = [];
  groupedTasks: { [type: string]: { [status: number]: CreateTaskDto[] } } = {
    work: {
    0: [],
    1: []
  },
  personal: {
    0: [],
    1: []
  },
  home: {
    0: [],
    1: []
  }
  };

  loadTasks() {
    this.service.Loadtasks().subscribe((items) => {
      this.tasklist = items;
      console.log(this.tasklist);

      // Grouping logic: type > status > items[]
      this.groupedTasks = {};
      for (const task of items) {
        const { type, status } = task;

        if (!this.groupedTasks[type]) {
          this.groupedTasks[type] = {};
        }
        if (!this.groupedTasks[type][status]) {
          this.groupedTasks[type][status] = [];
        }

        this.groupedTasks[type][status].push(task);
      }
   
    });
  }
}
