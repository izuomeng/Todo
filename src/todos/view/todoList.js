import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './todoItem'
import {toggleTodo, removeTodo} from '../actions'

const TodoList = ({todos, handleToggle, handleRemove}) => {
    return (
        <ul className="todo-list">
            {todos.map((v) => (
                <TodoItem 
                    key = {v.id} 
                    {...v}
                    onToggle = {() => handleToggle(v.id)}
                    onRemove = {() => handleRemove(v.id)}
                />
            ))}
        </ul>
    )
}
const selectTodos = (todos, filter = 'All') => {
    switch (filter) {
        case 'All':
            return todos
        case 'Completed':
            return todos.filter(v => v.completed)
        case 'Uncompleted':
            return todos.filter(v => !v.completed)
        default:
            return todos
    }
}
const mapState = (state) => ({
    todos: selectTodos(state.todos, state.filter)
})
const mapDispatch = {
    handleToggle: toggleTodo,
    handleRemove: removeTodo
}

export default connect(mapState, mapDispatch)(TodoList)