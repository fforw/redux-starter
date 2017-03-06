import assert from "power-assert"
import clone from "clone"

import * as Actions from "../../src/actions";
import rootReducer from "../../src/reducers";


function testReducer(state, action)
{
    const copy = clone(state);

    const result = rootReducer(state, action);

    // not modified!
    assert.deepEqual(state, copy);

    return result;
}



describe("TODOs", function ()
{
    it("can be added", function ()
    {
        const result = testReducer(
            {
                todos: []
            },
            Actions.addTodo("TEST")
        );

        assert(result.todos.length === 1);
        assert(result.todos[0].text === "TEST");
        assert(!result.todos[0].done);
    })

    it("can be removed", function ()
    {
        const result = testReducer(
            {
                todos: [{
                    text: "TODO #1",
                    done: true
                }]
            },
            Actions.removeTodo(0)
        );

        assert(result.todos.length === 0);
    })

});
