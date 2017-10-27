import * as Types from './actionTypes'

let nextTodoId = 0

export const addTodo = (text) => ({
    type: Types.ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text
})

export const toggleTodo = (id) => ({
    type: Types.TOGGLE_TODO,
    id
})

export const removeTodo = (id) => ({
    type: Types.REMOVE_TODO,
    id
})