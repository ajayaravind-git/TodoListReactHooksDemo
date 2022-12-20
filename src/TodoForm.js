import React from 'react';
import { Paper, Input, Button } from '@mui/material';
import useInputState from './hooks/useInputState'
function TodoForm({ addTodos }) {
    const [newTodo, setTodo, resetTodo] = useInputState('')
    return (<Paper>
        <form onSubmit={(e) => {
            e.preventDefault();
            addTodos(newTodo);
            resetTodo();
        }} >
            <Input placeholder='Enter New Todo' value={newTodo} onChange={setTodo} />
            <Button onClick={e => {
                e.preventDefault();
                addTodos(newTodo);
                resetTodo();
            }}>Add Todo</Button>
        </form></Paper>)
}

export default TodoForm;