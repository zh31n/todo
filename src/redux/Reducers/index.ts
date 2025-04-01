import {createReducer} from "@reduxjs/toolkit";
import {addTodo, deleteDoneTodosAction, setCurrentTodosAction, toggleIsDoneAction} from "./Actions.ts";

interface todosI {
    id: number,
    title: string,
    isDone: boolean
}
interface stateI {
    todos: todosI[],
    currentTodos:number
}


let initialState: stateI = {
    todos: [
        {id: 1, title: 'Сделать верстку', isDone: false},
        {id: 2, title: 'Сделать изменение', isDone: false},
        {id: 3, title: 'Покрыть тестами', isDone: false},
        {id: 4, title: 'Код ревью', isDone: false},
    ],
    currentTodos: 0
}




const reducer = createReducer(initialState, builder => {
    builder
        .addCase(addTodo, (state, action) => {
            let todo = {
                id: +new Date(),
                title: action.payload,
                isDone: false
            }
            state.todos.push(todo)
        })
        .addCase(toggleIsDoneAction,(state,action) => {
            return {
                ...state, todos: state.todos.map(t => {
                    if (t.id === action.payload) {
                        return { ...t, isDone: !t.isDone }
                    }
                    return t;
                })
            }
        })
        .addCase(setCurrentTodosAction,(state,action) => {
            state.currentTodos = action.payload
        })
        .addCase(deleteDoneTodosAction,(state, action) => {
            return {
                ...state, todos: state.todos.filter(t => !t.isDone)
            }
        })
})

export default reducer;