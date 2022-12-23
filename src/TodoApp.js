

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import useTodoState from './hooks/useTodoState';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { TodosProvider } from './contexts/todosContext';
function TodoApp() {



    return (<div>
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}>

            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <TaskAltIcon style={{ padding: "10px" }} />
                    <Typography color="inherit">Todos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={12} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>

    </div>)
}

export default TodoApp;