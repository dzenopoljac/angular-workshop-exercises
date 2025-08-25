import { Component, DoCheck, OnInit } from '@angular/core';
import { Task, TaskDetails, TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: false
})
export class App implements OnInit, DoCheck {
  tasks: Task[] = [];
  selectedTaskDetails: TaskDetails | null = null;
  someUnrelatedInput = '';

  constructor(private taskService: TaskService) {}

  // ANTI-PATTERN: Ručni subscribe, bez unsubscribe-a (memory leak)
  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  // ANTI-PATTERN: Ugnježđeni subscribe
  onTaskSelected(id: number) {
    this.taskService.getTaskDetails(id).subscribe((details) => {
      this.selectedTaskDetails = details;
    });
  }

  // Funkcija koja se poziva iz template-a (loše za performanse)
  getCompletedTasksCount() {
    console.log('Calculating completed tasks...');
    return this.tasks.filter(t => t.completed).length;
  }

  // Za demonstraciju detekcije promena
  ngDoCheck() {
    console.log('Change detection ran in AppComponent');
  }
}