import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.service';

@Pipe({
  name: 'completedCount',
  standalone: false,
  pure: true
})
export class CompletedCountPipe implements PipeTransform {

transform(tasks: Task[] | null): number {
    console.log('CompletedCountPipe ran!');
    if (!tasks) {
      return 0;
    }
    return tasks.filter(t => t.completed).length;
  }

}
