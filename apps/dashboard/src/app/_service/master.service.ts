import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTaskDto } from '../../../../../libs/data/dto/task/create-task.dto';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  Loadtasks() {
    const x = this.http.get<CreateTaskDto[]>('http://localhost:3000/api/tasks');
    console.log(x);
    return x;
  }
}
