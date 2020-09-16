import { FETCHING_POSTS, FETCH_POSTS, NEW_POST, ADDING_POSTS  } from "../actions/types"

const initialState = {
    items: [],
    item: {},
    loading: false
}

export default function (state=initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items : action.payload,
                loading: false
            }
            case NEW_POST: {
                return {
                ...state,
                items: [action.payload, ...state.items],
                loading: false
            }
        }
        case FETCHING_POSTS: 
        case ADDING_POSTS: 
        {
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state
    }

}