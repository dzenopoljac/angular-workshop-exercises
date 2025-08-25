import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class TaskList {
  @Input() tasks: Task[] | null = [];
  @Output() taskSelected = new EventEmitter<number>();

  selectTask(id: number) {
    this.taskSelected.emit(id);
  }
}
