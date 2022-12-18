import { useState } from "react"
import React, { Component } from 'react'
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"

import Todo from './Todo'

function Todolist(props) {
    const [todos, setTodos] = useState([""])
    return (<Paper><List>
        {props.todos.map(td =>
            <>
                <Todo Completed={props.Completed} todoEditing={props.todoEditing} removeTodos={props.removeTodos} task={td.task} key={td.id} completed={td.completed} id={td.id} />
                <Divider />
            </>)}
    </List>
    </Paper>)
}
export default Todolist;