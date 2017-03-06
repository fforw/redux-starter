import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./configure-store";
import TodoList from "./components/TodoList";


window.onload = function ()
{
    ReactDOM.render(
        <Provider store={store}>
            <TodoList/>
        </Provider>,
        document.getElementById("root")
    );
};

