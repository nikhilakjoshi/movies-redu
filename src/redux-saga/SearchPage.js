import React, { useEffect } from 'react'
import MovieSearch from "./MovieSearch";
import Movies from "./Movies";
import { getMovies, setSearchParam, clearMovies } from "./actions/moviesAcion";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";

export default function SearchPage() {
    
    const dispatch = useDispatch()

    const srchTxt = useSelector(state => state.movies.srchTxt)

    useEffect(() => {
        dispatch(clearMovies())
        if(srchTxt === "") {
            dispatch(getMovies({
                query: "",
                endpoint: '/movie/popular',
                page: 1
            }))
        } else {
            dispatch(getMovies({
                query: srchTxt,
                endpoint: '/search/movie',
                page: 1 
            }))
        }
        
    }, [dispatch, srchTxt])
    
    const triggerSearch = (searchStr) => {
        
        dispatch(setSearchParam({
            string: searchStr
        }))
        if(searchStr !== "") {
            dispatch(getMovies({
                query: searchStr,
                endpoint: '/search/movie',
                page: 1 
            }))
        } else {
            dispatch(getMovies({
                query: "",
                endpoint: '/movie/popular',
                page: 1
            }))
        }
    }
    
    return (
        <Container
            maxWidth="md"
        >
            <MovieSearch triggerSearch={triggerSearch}/>
            <Movies />
        </Container>
    )
}
