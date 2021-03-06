import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task:Task[]=[];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task)=>
    this.task=task);
  }


}
