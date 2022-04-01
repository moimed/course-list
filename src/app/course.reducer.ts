import { createReducer, on } from "@ngrx/store";
import Course from "./course.model";
import { add_course, delete_course } from "./course.actions";
import { concat } from "rxjs";

const initial_courses_state: Course[] = [
    {
        id: 1,
        department: "Computer science",
        title: "NgRx first steps"
    },
    {
        id: 2,
        department: "Computer science",
        title: "Angular basics"
    },
    {
        id: 3,
        department: "Computer science",
        title: "Web technologies"
    },
];


export const course_reducer = createReducer<Course[]>(
    initial_courses_state,
    on(add_course, (courses, action) => courses.concat({
        ...action.course,
        id: Math.max(...courses.map(c => c.id), 0) + 1,
    })),
    // Add on delete_course
    on(delete_course, (courses, action) => courses.filter(c => c.id !== action.id)),

)

