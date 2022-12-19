import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggleHook from "./hooks/useToggleHook";
import TodoEditForm from "./TodoEditForm"

function Todo({ completed, task, removeTodos, id, Completed, todoEditing }) {
    const [Editing, toggleEditing] = useToggleHook(false);

    return (<> {!Editing ?
        < ListItem > <Checkbox checked={completed ? true : false} onClick={() => { Completed(id); }} />
            <ListItemText onClick={() => { Completed(id); }} style={{ textDecoration: completed ? "line-through" : "", cursor: "pointer", color: completed ? "black" : "slateblue" }}>
                {task}
            </ListItemText>
            <ListItemText style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>

                <IconButton aria-label="Edit" onClick={() => { toggleEditing() }}><EditIcon /></IconButton>
                <IconButton aria-label="Delete" onClick={() => { removeTodos(id) }}><DeleteIcon /></IconButton>
            </ListItemText>
        </ListItem > : <TodoEditForm id={id} task={task} toggleEditing={toggleEditing} todoEditing={todoEditing} />}</>)
}

export default Todo;