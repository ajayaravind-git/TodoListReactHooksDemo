

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import useTodoState from './hooks/useTodoState';

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || []

    const { todos, addTodos, removeTodos, Completed, todoEditing } = useTodoState(initialTodos)

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])





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
                    <TodoList Completed={Completed} removeTodos={removeTodos} todos={todos} todoEditing={todoEditing} />
                </Grid>
            </Grid>
        </Paper>

    </div>)
}

export default TodoApp;