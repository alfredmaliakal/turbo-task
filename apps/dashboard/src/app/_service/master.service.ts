import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTaskDto } from '../../../../../libs/data/dto/task/create-task.dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  Loadtasks(){
    return this.http.get<CreateTaskDto[]>("http://localhost:3000/api/tasks");
  }

}
