import React, { createContext, useReducer } from "react"; //context file with reducer
import useTodoState from "../hooks/useTodoState";
import reducer from "../reducers/todoReducer";
export const TodosContext = createContext();

const initialTodos = [];

export function TodosProvider(props) {

    const [todos, dispatch] = useReducer(reducer, initialTodos)

    return <TodosContext.Provider value={{ todos, dispatch }}>
        {props.children}
    </TodosContext.Provider>

}

