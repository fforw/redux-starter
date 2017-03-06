import { combineReducers } from 'redux'

import * as Actions from "../actions";

import assign from "object-assign"

const todos = (todos = [], action) =>
{
    switch(action.type)
    {
        case Actions.ADD_TODO:
            return todos.concat({
                text: action.text,
                done: false
            });

        case Actions.REMOVE_TODO:

            const copy = todos.slice();
            copy.splice(action.index, 1);
            return copy;

        default:
            return todos;
    }
};


const rootReducer = combineReducers({
    todos
});

export default rootReducer;
