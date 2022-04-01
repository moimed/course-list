import { createAction, props } from "@ngrx/store";
import Course from "./course.model";

export const add_course = createAction('[Course] Add Course', props<{course: Course}>());
export const delete_course = createAction('[Course] Delete Course', props<{id: number}>());
