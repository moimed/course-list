import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { course_reducer } from './course.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      courses: course_reducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'course_list_app',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
