import { Component, OnInit } from '@angular/core';
import Course from './course.model';
import App_state from './app.state';
import { Store, select } from '@ngrx/store';
import { add_course, delete_course } from './course.actions';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courseForm = new FormGroup({
    department: new FormControl(''),
    title: new FormControl(''),
  });

  courses$ = this.store.pipe(
    select(store => store.courses)
  ) 
  
  constructor(private store: Store<App_state>){ }
  
  ngOnInit(): void {
    
  }

  handle_add_course(course: Course){
    this.store.dispatch(add_course({course}));
  }

  handle_delete_course(id: number){
    this.store.dispatch(delete_course({id}));
  }
}
