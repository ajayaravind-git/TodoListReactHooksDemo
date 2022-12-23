import { Input, Button, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import { useContext } from 'react';
import { TodosContext } from './contexts/todosContext';
import useInputState from './hooks/useInputState'


function TodoEditForm({ toggleEditing, id, task }) {
    const [editTodo, setEditTodo, ResetEditTodo] = useInputState(task)
    const { todoEditing } = useContext(TodosContext)
    return (<form onSubmit={(e) => {
        e.preventDefault();
        todoEditing(id, editTodo);
        toggleEditing();


    }}>
        <ListItem style={{ textAlign: "center" }}>
            <ListItemText >
                <Input value={editTodo} onChange={setEditTodo} fullWidth />

            </ListItemText>
            <ListItemSecondaryAction>
                <Button onClick={() => { toggleEditing(); }}>x</Button>
                <Button onClick={() => {
                    todoEditing(id, editTodo);
                    toggleEditing();

                }}>Save</Button>
            </ListItemSecondaryAction>

        </ListItem></form>)
}

export default TodoEditForm;