import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function Todo({ completed, task }) {
    return (<ListItem><Checkbox />
        <ListItemText style={{ textDecoration: completed ? "line-through" : "" }}> {task}
        </ListItemText>
        <ListItemSecondaryAction>

            <IconButton aria-label="Edit"><EditIcon /></IconButton>
            <IconButton aria-label="Delete"><DeleteIcon /></IconButton>
        </ListItemSecondaryAction>
    </ListItem>)
}

export default Todo;