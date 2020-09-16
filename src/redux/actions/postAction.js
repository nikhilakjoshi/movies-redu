import { NEW_POST, FETCH_POSTS, FETCHING_POSTS, ADDING_POSTS } from "./types";
import axios from "axios"

export const fetchPosts = () => dispatch => {

    dispatch({
        type: FETCHING_POSTS
    })

    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        dispatch({
            type: FETCH_POSTS,
            payload: res.data
        })
    })
}

export const addPosts = (post) => dispatch => {
    dispatch({
        type: ADDING_POSTS
    })
    axios.post('https://jsonplaceholder.typicode.com/posts', post).then(res => {
        dispatch({
            type: NEW_POST,
            payload: res.data
        })
    })
}