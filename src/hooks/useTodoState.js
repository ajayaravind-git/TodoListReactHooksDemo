import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from "./useLocalStorage";


function useTodoState(initialTodos) {

    const [todos, setTodos] = useLocalStorage("todos", initialTodos)


    return {
        todos,



        addTodos: (newTodoText) => {
            setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])

        },
        removeTodos: (id) => {
            setTodos(todos.filter(td => id != td.id))
        },
        Completed: (id) => {
            setTodos(todos.map(td => {
                if (td.id === id) {
                    return { ...td, completed: !td.completed }
                } else {
                    return td
                }
            }))
        },
        todoEditing: (id, newTask) => {
            setTodos(todos.map(td => {
                if (td.id === id) {
                    return { ...td, task: newTask }
                } else {
                    return td
                }
            }))
        }


    }
}

export default useTodoState;