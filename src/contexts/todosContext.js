import React, { createContext, useReducer } from "react"; //context file with reducer
import useTodoState from "../hooks/useTodoState";
import reducer from "../reducers/todoReducer";
export const TodosContext = createContext();
export const DispatchContext = createContext();

const initialTodos = [];

export function TodosProvider(props) {

    const [todos, dispatch] = useReducer(reducer, initialTodos)

    return <TodosContext.Provider value={todos}>    {/*Rerender prevention by passing the todos instead of  todos object*/}
        <DispatchContext.Provider value={dispatch}>   {/*Rerender prevention by passing the dispatch instead of  todos object*/}
            {props.children}                             {/*This prevents the creation on new object everytime dispatch is called thus preventing rerender*/}
        </DispatchContext.Provider>                        {/*Also change the way the value is obtained */}
    </TodosContext.Provider>

}

