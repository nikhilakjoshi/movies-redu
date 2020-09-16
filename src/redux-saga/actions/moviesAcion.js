import { FETCH_MOVIES, SET_SEARCH, SET_SELECTED_MOVIE } from "./../types"

export function getMovies({ query, page, endpoint }) {
  return { 
    type: FETCH_MOVIES,
    endpoint,
    query,
    page
  }
}
export function setSelectedMovie({ movie }) {
  return { 
    type: SET_SELECTED_MOVIE,
    movie
  }
}
export function setSearchParam({ string }) {
  return { 
    type: SET_SEARCH,
    string
  }
}