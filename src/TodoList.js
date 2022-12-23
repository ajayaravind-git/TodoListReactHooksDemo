import { useState, useContext } from "react"
import React, { Component } from 'react'
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import { TodosContext } from "./contexts/todosContext"

import Todo from './Todo'

function Todolist(props) {
    const { todos } = useContext(TodosContext)

    return (<Paper><List>
        {todos.map(td =>
            <>
                <Todo task={td.task} key={td.id} completed={td.completed} id={td.id} />

                {td === todos[todos.length - 1] ? "" : <Divider />}
            </>)}
    </List>
    </Paper>)
}
export default Todolist; 