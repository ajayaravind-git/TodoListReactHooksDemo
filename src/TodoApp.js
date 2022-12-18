

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const initialTodos = [{ id: 1, task: "wash clothes", completed: false }, {
        id: 2, task: "walk dog", completed: false
    }]
    const [todos, setTodos] = useState(initialTodos);
    const addTodos = (newTodoText) => {
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])

    }
    const removeTodos = (id) => {
        setTodos(todos.filter(td => id != td.id))
    }
    const Completed = (id) => {
        setTodos(todos.map(td => {
            if (td.id === id) {
                return { ...td, completed: !td.completed }
            } else {
                return td
            }
        }))
    }
    return (<div>
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}>

            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">Todos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={12} md={8} lg={4}>
                    <TodoForm addTodos={addTodos} />
                    <TodoList Completed={Completed} removeTodos={removeTodos} todos={todos} />
                </Grid>
            </Grid>
        </Paper>

    </div>)
}

export default TodoApp;