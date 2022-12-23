import React, { useContext } from 'react';
import { Paper, Input, Button } from '@mui/material';
import useInputState from './hooks/useInputState'
import { TodosContext } from './contexts/todosContext';
function TodoForm() {
    const [newTodo, setTodo, resetTodo] = useInputState('')
    const { addTodos } = useContext(TodosContext)
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