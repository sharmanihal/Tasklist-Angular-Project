import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Task } from '../task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  constructor(private taskService:TaskService){}
  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}