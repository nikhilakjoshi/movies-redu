import { 
    FETCH_MOVIES_FAILED,
    FETCH_MOVIES_SUCCESS,
    SET_SEARCH_SUCCESS,
    SET_SELECTED_MOVIE_SUCCESS,
    CLEAR_MOVIES_SUCCESS
} from "./../types";

const initialState = {
    movies: [],
    message: "",
    srchTxt: "",
    selectedMovie: {}
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
        
        case SET_SELECTED_MOVIE_SUCCESS: {
            return {
                ...state,
                selectedMovie: action.selectedMovie
            }
        }

        case SET_SEARCH_SUCCESS: {
            return {
                ...state,
                srchTxt: action.srchTxt
            }
        }
        case CLEAR_MOVIES_SUCCESS: {
            return {
                ...state,
                movies: []
            }
        }
        default:{
            return {
                ...state
            }
        }
    }
}