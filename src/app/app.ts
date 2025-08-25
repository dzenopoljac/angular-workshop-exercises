import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { Task, TaskDetails, TaskService } from './task.service';
import { catchError, EMPTY, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush // DODAJ OVO

})
export class App {
    tasks$: Observable<Task[]>;
  someUnrelatedInput = '';

  private selectedTaskId = new Subject<number>();

  selectedTaskDetails$: Observable<TaskDetails>;

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();

    this.selectedTaskDetails$ = this.selectedTaskId.pipe(
      switchMap(id => 
        this.taskService.getTaskDetails(id).pipe(
          catchError(err => {
            console.error(err);
            return EMPTY; 
          })
        )
      )
    );
  }

  onTaskSelected(id: number) {
    this.selectedTaskId.next(id);
  }
}