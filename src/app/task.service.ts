import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Task { id: number; title: string; completed: boolean; }
export interface TaskDetails extends Task { description: string; assignedTo: string; }

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Refactor old module', completed: false },
    { id: 2, title: 'Write unit tests', completed: true },
    { id: 3, title: 'Deploy to production', completed: false },
  ];

  private details: TaskDetails[] = [
    { id: 1, title: 'Refactor old module', completed: false, description: 'The legacy module is slow and needs a full refactor.', assignedTo: 'Alice' },
    { id: 2, title: 'Write unit tests', completed: true, description: 'Increase code coverage for the payments service to 90%.', assignedTo: 'Bob' },
    { id: 3, title: 'Deploy to production', completed: false, description: 'Coordinate with the DevOps team for the Sunday deployment.', assignedTo: 'Alice' },
  ];

  getTasks(): Observable<Task[]> {
    console.log('API CALL: Fetching all tasks...');
    return of(this.tasks).pipe(delay(500));
  }

  getTaskDetails(id: number): Observable<TaskDetails> {
    console.warn(`API CALL: Fetching details for task ${id}...`);
    const detail = this.details.find(d => d.id === id);
    if (!detail) {
      throw new Error('Task not found!');
    }
    return of(detail).pipe(delay(300));
  }
}