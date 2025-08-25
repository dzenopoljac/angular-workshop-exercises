import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { Task, TaskDetails, TaskService } from './task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush // DODAJ OVO

})
export class App {
  tasks$: Observable<Task[]>; 
  selectedTaskDetails: TaskDetails | null = null;
  someUnrelatedInput = '';

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();
  }

  onTaskSelected(id: number) {
    this.taskService.getTaskDetails(id).subscribe(details => {
      this.selectedTaskDetails = details;
    });
  }

  getCompletedTasksCount() {
    return 0; 
  }
}