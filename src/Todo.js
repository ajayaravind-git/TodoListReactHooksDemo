import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function Todo({ completed, task, removeTodos, id, Completed }) {

    return (<ListItem><Checkbox checked={completed ? true : false} onClick={() => { Completed(id); }} />
        <ListItemText onClick={() => { Completed(id); }} style={{ textDecoration: completed ? "line-through" : "", cursor: "pointer" }}> {task}
        </ListItemText>
        <ListItemSecondaryAction>

            <IconButton aria-label="Edit"><EditIcon /></IconButton>
            <IconButton aria-label="Delete" onClick={() => { removeTodos(id) }}><DeleteIcon /></IconButton>
        </ListItemSecondaryAction>
    </ListItem>)
}

export default Todo;