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

const mapState = (state) => ({
    todos: state.todos
})
const mapDispatch = {
    handleToggle: toggleTodo,
    handleRemove: removeTodo
}

export default connect(mapState, mapDispatch)(TodoList)