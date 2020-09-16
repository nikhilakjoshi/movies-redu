import { FETCH_MOVIES, FETCH_MOVIES_FAILED, FETCH_MOVIES_SUCCESS } from "./../types";

const initialState = {
    movies: [],
    message: ""
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES_SUCCESS: {
            return {
                ...state,
                movies: action.movies
            }
        }
        case FETCH_MOVIES_FAILED: {
            return {
                ...state,
                message: action.message
            }
        }
        default:{
            return {
                ...state
            }
        }
    }
}