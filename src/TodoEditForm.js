import { Input, Button, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import useInputState from './hooks/useInputState'


function TodoEditForm({ todoEditing, toggleEditing, id, task }) {
    const [editTodo, setEditTodo, ResetEditTodo] = useInputState(task)
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