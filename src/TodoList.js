import { useState } from "react"
import React, { Component } from 'react'
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Todo from './Todo'

function Todolist(props) {
    const [todos, setTodos] = useState([""])
    return (<Paper><List>
        {props.todos.map(td =>
            <>
                <Todo task={td.task} key={td.id} completed={td.completed} />
                <Divider />
            </>)}
    </List>
    </Paper>)
}
export default Todolist;