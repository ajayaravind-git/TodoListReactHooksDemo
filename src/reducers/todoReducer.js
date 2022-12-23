
import { v4 as uuidv4 } from 'uuid';


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuidv4(), task: action.task, completed: false }]
        case "REMOVE":
            return state.filter(td => action.id != td.id)
        case "COMPLETED":
            return state.map(td => {
                if (td.id === action.id) {
                    return { ...td, completed: !td.completed }
                } else {
                    return td
                }
            })

        case "EDIT":
            return state.map(td => {
                if (td.id === action.id) {
                    return { ...td, task: action.newTask }
                } else {
                    return td
                }
            })
        default:
            return state;

    }
};

export default reducer;



