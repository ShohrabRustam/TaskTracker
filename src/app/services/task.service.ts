import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

// for the Task
import { Task } from '../Task';

// task data
import { TASKS } from '../mock-tasks';
import {Observable,of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:3000/tasks"
  constructor() { }

  getTask():Observable<Task[]>{
    const task = of(TASKS);
    return task;
  }
}
