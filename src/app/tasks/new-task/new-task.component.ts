import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData, type Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close=new EventEmitter<void>();
  @Output() add=new EventEmitter<NewTaskData>();
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  private taskService=inject(TaskService);
  constructor(){}
  onSubmit(){
    this.taskService.addTask({title:this.enteredTitle,summary:this.enteredSummary,date:this.enteredDate},this.userId);
    this.close.emit()
  }

  onCancelAddTask(){
    this.close.emit()
  }
}
