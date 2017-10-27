import * as Types from './actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case Types.ADD_TODO:
            return [
                {
                    completed: false,
                    id: action.id,
                    text: action.text
                },
                ...state
            ]
        case Types.TOGGLE_TODO:
            return state.map((v) => {
                if (v.id === action.id) {
                    return {...v, completed: !v.completed}
                } else {
                    return v
                }
            })
        case Types.REMOVE_TODO:
            return state.filter((v) => {
                return v.id !== action.id
            })
        default:
            return state
    }
}