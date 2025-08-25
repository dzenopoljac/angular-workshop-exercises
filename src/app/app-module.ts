import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CompletedCountPipe } from './completed-count-pipe';
import { TaskList } from './task-list/task-list';
import { TaskDetailsComponent } from './task-details/task-details';

@NgModule({
  declarations: [
    App,
    CompletedCountPipe,
    TaskList,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
