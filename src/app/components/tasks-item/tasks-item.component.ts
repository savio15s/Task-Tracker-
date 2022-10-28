import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  
  @Input()
  task!: Task;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter(); 
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter(); 


  constructor() { }

  faTimes = faTimes;

  ngOnInit(): void {
  }

  onDelete(task: any){
   this.onDeleteTask.emit(task);

  }
  onToggle(task: Task | undefined){
    this.onToggleReminder.emit(task);
  }

}
