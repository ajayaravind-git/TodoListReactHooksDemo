import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggleHook from "./hooks/useToggleHook";
import TodoEditForm from "./TodoEditForm"
import { useContext } from "react";
import { DispatchContext } from "./contexts/todosContext";

function Todo({ completed, task, id }) {
    const dispatch = useContext(DispatchContext)
    const [Editing, toggleEditing] = useToggleHook(false);

    return (<> {!Editing ?
        < ListItem > <Checkbox checked={completed ? true : false} onClick={() => dispatch({ type: "COMPLETED", id: id })} />
            <ListItemText onClick={() => dispatch({ type: "COMPLETED", id: id })} style={{ textDecoration: completed ? "line-through" : "", cursor: "pointer", color: completed ? "black" : "slateblue" }}>
                {task}
            </ListItemText>
            <ListItemText style={{ display: "flex", alignItems: "center", justifyContent: "end" }}>

                <IconButton aria-label="Edit" onClick={() => { toggleEditing() }}><EditIcon /></IconButton>
                <IconButton aria-label="Delete" onClick={() => dispatch({ type: "REMOVE", id: id })}><DeleteIcon /></IconButton>
            </ListItemText>
        </ListItem > : <TodoEditForm id={id} task={task} toggleEditing={toggleEditing} />}</>)
}

export default Todo;