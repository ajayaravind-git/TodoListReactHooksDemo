import React, { useContext } from 'react';
import { Paper, Input, Button } from '@mui/material';
import useInputState from './hooks/useInputState'
import { DispatchContext } from './contexts/todosContext';
function TodoForm() {
    const [newTodo, setTodo, resetTodo] = useInputState('')
    const { dispatch } = useContext(DispatchContext)

    return (<Paper>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "ADD", task: newTodo });
            resetTodo();
        }} >
            <Input placeholder='Enter New Todo' value={newTodo} onChange={setTodo} />
            <Button onClick={e => {
                e.preventDefault();
                dispatch({ type: 'ADD', task: newTodo });
                resetTodo();
            }}>Add Todo</Button>
        </form></Paper>)
}

export default TodoForm;