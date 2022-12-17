

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TodoList from "./TodoList"

function TodoApp() {
    const initialTodos = [{ id: 1, task: "wash clothes", completed: false }, {
        id: 2, task: "walk dog", completed: false
    }]
    const [todos, setTodos] = useState(initialTodos);
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
            <TodoList todos={todos} />

        </Paper>

    </div>)
}

export default TodoApp;