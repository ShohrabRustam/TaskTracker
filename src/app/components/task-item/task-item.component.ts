import { Component, OnInit  } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// import {TASK} from ''

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  task:Task[]=TASKS;
  constructor() { }
  ngOnInit(): void {
  }

}
