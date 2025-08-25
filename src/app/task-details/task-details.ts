import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskDetails } from '../task.service';


@Component({
  selector: 'app-task-details',
  standalone: false,
  templateUrl: './task-details.html',
  styleUrl: './task-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDetailsComponent {
  @Input() details: TaskDetails | null = null;

}
