import {ADD_TODO, DELETE_TODO, EDIT_TODO} from "../constants/ActionTypes";

const initialState = [{
    text: "Use Redux",
    marked: false,
    id: 0
}];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [{
                id: (state.length === 0) ? 0 : state[0].id + 1,
                marked: false,
                text: action.text
            }, ...state];
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case EDIT_TODO: 
            return state.map((todo) => todo.id === action.id ? { ...todo, text: action.text } : todo);
        default: 
            return state;
        }
}

