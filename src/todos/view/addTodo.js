import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            text: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()
        this.props.handleSubmit(this.state.text)
        this.setState({
            text: ''
        })
    }
    onChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange} value={this.state.text}/>
                    <input type="submit" value="add"/>
                </form>
            </div>
        )
    }
}
AddTodo.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

const mapDispatch = (dispatch) => ({
    handleSubmit(text) {
        dispatch(addTodo(text))
    }
})

export default connect(null, mapDispatch)(AddTodo)