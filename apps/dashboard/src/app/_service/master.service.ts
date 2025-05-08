import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { task } from '../_model/task';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  Loadtasks(){
    return this.http.get<task[]>("http://localhost:3000/api/tasks");
  }
}
