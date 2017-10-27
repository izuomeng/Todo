import React from 'react'

const TodoItem = ({onToggle, onRemove, completed, text}) => (
    <li style={{
        textDecoration: completed ? 'line-through' : ''
    }}>
        <input 
            type="checkbox" 
            checked={completed ? 'checked' : ''}
            readOnly
            onClick={onToggle}
        />
        <label>{text}</label>
        <button onClick={onRemove}>x</button>
    </li>
)

export default TodoItem