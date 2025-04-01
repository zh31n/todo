import {createAction} from "@reduxjs/toolkit";

export let addTodo = createAction<string>('ADD-TODO');
export let toggleIsDoneAction = createAction<boolean>('TOGGLE-IS-DONE');
export let setCurrentTodosAction = createAction<number>('SET-CURRENT-TODOS');
export let deleteDoneTodosAction = createAction('DELETE-DONE-TODOS');