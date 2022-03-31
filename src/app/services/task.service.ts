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

  constructor() { }

  getTask():Observable<Task[]>{
    const task = of(TASKS);
    return task;
  }
}
