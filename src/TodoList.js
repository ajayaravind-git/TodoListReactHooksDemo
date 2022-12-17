import { useState } from "react"
import React, { Component } from 'react'
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
function Todolist(props) {
    const [todos, setTodos] = useState([""])
    return (<Paper><List>
        {props.todos.map(td =>
            <>
                <ListItem>
                    <ListItemText>{td.task}
                    </ListItemText>
                </ListItem>
                <Divider />
            </>)}
    </List>
    </Paper>)
}
export default Todolist;