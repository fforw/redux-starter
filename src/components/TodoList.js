import React from "react"

import { connect } from 'react-redux'

import { addTodo, removeTodo } from "../actions"

class TodoList extends React.Component {

    render()
    {
        const { addTodo, removeTodo} = this.props;

        return (
            <div>
                <h1>TODO</h1>
                <table>
                    <thead className="sr-only">
                        <tr>
                            <th>TODO</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.todos.map( (todo, index) =>
                                <tr key={index}>
                                    <td>
                                        {
                                            <span className="form-control-static">
                                                { todo.text }
                                            </span>
                                        }
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-default"
                                            tabIndex= { 1 + index}
                                            onClick={ () => removeTodo(index) }
                                        >
                                            <span className="glyphicon glyphicon-minus"></span>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            )

                        }
                        <tr>
                            <td>
                                <input ref={ c => { this._input = c }} type="text" autoFocus={ true }/>
                            </td>
                            <td>
                                <button className="btn btn-primary" tabIndex="1" onClick={ () => addTodo( this._input.value  )  }>
                                    <span className="glyphicon glyphicon-plus"></span>
                                    Add
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return {
        todos: state.todos
    };
}


export default connect(
    mapStateToProps,
    {
        addTodo,
        removeTodo
    })(TodoList);
