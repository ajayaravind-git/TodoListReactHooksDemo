import React, { createContext, useReducer } from "react"; //context file with reducer
import useTodoState from "../hooks/useTodoState";
import reducer from "../reducers/todoReducer";
export const TodosContext = createContext();
export const DispatchContext = createContext();

const initialTodos = [];

export function TodosProvider(props) {

    const [todos, dispatch] = useReducer(reducer, initialTodos)

    return <TodosContext.Provider value={{ todos }}>
        <DispatchContext.Provider value={{ dispatch }}>  {/*context passed in seperately as objects but still rerendering problem occcurs because a new object is created everytime the dispatch function is used.*/}
            {props.children}                              {/*to solve this issue pass it normally and not as an object.*/}
        </DispatchContext.Provider>    {/*Rerender prevention done on branch SplittingContextRerenderSolved //Also change the way it is aquired in other files, because its not an object that we import.*/}
    </TodosContext.Provider>

}

